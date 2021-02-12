import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { pizzaSaucesData, pizzaCheesesData } from '../../Data/pizzaData';
import { pizzaOptionsVariants, primaryBtnVariants } from '../../Data/animations';

const Sauce = ({ setPizzaSauce, setPizzaCheese, pizza, changeLocation }) => {
  changeLocation();

  const handleClick = (e) => {
    const { target } = e;
    const { children } = target.parentNode;
    if (target.classList.contains('builderBtnSauce')) {
      setPizzaSauce(e);
    } else {
      setPizzaCheese(e);
    }

    for (let i = 0; i < children.length; i += 1) {
      children[i].classList.remove('btn-primary-selected');
    }
    target.classList.add('btn-primary-selected');
  };

  useEffect(() => {
    if (pizza.sauce) {
      document.getElementById(`${pizza.sauce.id}-Btn`).classList.add('btn-primary-selected');
    }
    if (pizza.cheese) {
      document.getElementById(`${pizza.cheese.id}-Btn`).classList.add('btn-primary-selected');
    }
  });

  return (
    <motion.section
      className="builder_interface_buildOptions"
      variants={pizzaOptionsVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>PICK YOUR SAUCE</h2>
      <span className="builder_interface_buildOptions_options">
        {pizzaSaucesData.map((sauce) => (
          <motion.button
            variants={primaryBtnVariants}
            type="button"
            className="builderBtnSauce btn-primary"
            id={`${sauce.id}-Btn`}
            key={sauce.id}
            onClick={handleClick}
          >
            {sauce.name}
          </motion.button>
        ))}
      </span>
      <h2>PICK YOUR CHEESE</h2>
      <span className="builder_interface_buildOptions_options">
        {pizzaCheesesData.map((cheese) => (
          <motion.button
            variants={primaryBtnVariants}
            type="button"
            className="builderBtn btn-primary"
            id={`${cheese.id}-Btn`}
            key={cheese.id}
            onClick={handleClick}
          >
            {cheese.name}
          </motion.button>
        ))}
      </span>
      <span className="builder_interface_buildOptions_back">
        <Link to="/base">
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
      {pizza.sauce && pizza.cheese && (
        <span className="builder_interface_buildOptions_continue">
          <Link to="/toppings">
            <motion.button
              type="button"
              className="builderBtn btn-big"
              variants={pizzaOptionsVariants}
              whileHover="hover"
              initial="initial"
              animate="animate"
              exit="exit"
            >
              CONTINUE
            </motion.button>
          </Link>
        </span>
      )}
    </motion.section>
  );
};

Sauce.propTypes = {
  setPizzaSauce: PropTypes.func.isRequired,
  setPizzaCheese: PropTypes.func.isRequired,
  pizza: PropTypes.object.isRequired,
  changeLocation: PropTypes.func.isRequired,
};

export default Sauce;
