import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Topping from '../Topping/Topping';

import { pizzaToppingsData } from '../../Data/pizzaData';
import { pizzaOptionsVariants } from '../../Data/animations';

const Toppings = ({
  setPizzaToppings,
  setPizzaToppingLayout,
  setPizzaToppingUI,
  pizza,
  changeLocation,
  changeBuildActive,
  createMissingValuesString,
}) => {
  const location = useLocation().pathname;
  const missingValuesString = createMissingValuesString();

  const handleClick = () => {
    changeBuildActive(false);
  };

  useEffect(() => {
    changeLocation(location);
  });

  return (
    <motion.section
      className="builder_interface_buildOptions"
      variants={pizzaOptionsVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>PICK YOUR TOPPINGS</h2>
      <section className="builder_interface_buildOptions_toppings">
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
      <span className="builder_interface_buildOptions_back">
        <Link to="/sauce">
          <motion.button
            type="button"
            className="builderBtnCheese btn-big"
            variants={pizzaOptionsVariants}
            whileHover="hover"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            GO BACK
          </motion.button>
        </Link>
      </span>
      {pizza.progress.complete && (
        <span className="builder_interface_buildOptions_continue">
          <Link to="/order">
            <motion.button
              type="button"
              className="builderBtn btn-big"
              variants={pizzaOptionsVariants}
              whileHover="hover"
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={handleClick}
            >
              PLACE YOUR ORDER NOW
            </motion.button>
          </Link>
        </span>
      )}
      {!pizza.progress.complete && (
        <span>
          <p>{`You are missing ${missingValuesString} on your pizza cannot complete order!`}</p>
        </span>
      )}
    </motion.section>
  );
};

Toppings.propTypes = {
  setPizzaToppings: PropTypes.func.isRequired,
  setPizzaToppingLayout: PropTypes.func.isRequired,
  setPizzaToppingUI: PropTypes.func.isRequired,
  pizza: PropTypes.object.isRequired,
  changeLocation: PropTypes.func.isRequired,
  changeBuildActive: PropTypes.func.isRequired,
  createMissingValuesString: PropTypes.func.isRequired,
};

export default Toppings;
