import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Topping from '../Topping/Topping';

import { pizzaToppingsData } from '../../Data/pizzaData';

const Toppings = ({
  setPizzaToppings,
  setPizzaToppingLayout,
  setPizzaToppingUI,
  formatName,
  pizza,
}) => (
  <section className="builder_toppings">
    <section className="builder_toppings_protein">
      <h2>PICK YOUR PROTEINS</h2>
      <motion.span>
        {pizzaToppingsData.map((topping) => (
          <Topping
            setPizzaToppings={setPizzaToppings}
            setPizzaToppingLayout={setPizzaToppingLayout}
            setPizzaToppingUI={setPizzaToppingUI}
            formatName={formatName}
            ingredient={topping}
            pizza={pizza}
          />
        ))}
      </motion.span>
    </section>
  </section>
);

Toppings.propTypes = {
  setPizzaToppings: PropTypes.func.isRequired,
  setPizzaToppingLayout: PropTypes.func.isRequired,
  setPizzaToppingUI: PropTypes.func.isRequired,
  formatName: PropTypes.func.isRequired,
  pizza: PropTypes.object.isRequired,
};

export default Toppings;
