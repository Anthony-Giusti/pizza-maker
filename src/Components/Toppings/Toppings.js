import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Topping from '../Topping/Topping';

import { pizzaToppingsData } from '../../Data/pizzaData';
import { pizzaOptionsVariants } from '../../Data/animations';

const Toppings = ({ setPizzaToppings, setPizzaToppingLayout, setPizzaToppingUI, pizza }) => (
  <motion.section
    className="builder_toppings"
    variants={pizzaOptionsVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <section className="builder_toppings_protein">
      <h2>PICK YOUR PROTEINS</h2>
      <motion.span>
        {pizzaToppingsData.map((topping) => (
          <Topping
            key={`${topping.id}`}
            setPizzaToppings={setPizzaToppings}
            setPizzaToppingLayout={setPizzaToppingLayout}
            setPizzaToppingUI={setPizzaToppingUI}
            ingredient={topping}
            pizza={pizza}
          />
        ))}
      </motion.span>
    </section>
    {pizza.toppings.length > 0 && (
      <span className="builder_continue">
        <Link to="/toppings">
          <motion.button
            type="button"
            className="builder_styles_btn btn-primary"
            variants={pizzaOptionsVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Continue
          </motion.button>
        </Link>
      </span>
    )}
  </motion.section>
);

Toppings.propTypes = {
  setPizzaToppings: PropTypes.func.isRequired,
  setPizzaToppingLayout: PropTypes.func.isRequired,
  setPizzaToppingUI: PropTypes.func.isRequired,
  pizza: PropTypes.object.isRequired,
};

export default Toppings;
