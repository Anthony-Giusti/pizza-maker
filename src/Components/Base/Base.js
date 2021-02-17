import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import { pizzaSizesData, pizzaStylesData } from '../../Data/pizzaData';
import { pizzaOptionsVariants, primaryBtnVariants } from '../../Data/animations';

const Base = ({ pizza, setPizzaStyle, setPizzaSize, changeLocation }) => {
  const location = useLocation().pathname;

  const handleClick = (e) => {
    const { target } = e;
    const { children } = target.parentNode;
    if (target.classList.contains('builderBtnSize')) {
      setPizzaSize(e);
    } else {
      setPizzaStyle(e);
    }

    for (let i = 0; i < children.length; i += 1) {
      children[i].classList.remove('btn-primary-selected');
    }
  };

  useEffect(() => {
    if (pizza.size) {
      document.getElementById(`${pizza.size.id}-Btn`).classList.add('btn-primary-selected');
    }
    if (pizza.style) {
      document.getElementById(`${pizza.style.id}-Btn`).classList.add('btn-primary-selected');
    }

    changeLocation(location);
  });

  return (
    <motion.section
      className="builder_interface_buildOptions base"
      variants={pizzaOptionsVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key="base-options"
    >
      <h2>PICK YOUR BASE</h2>
      <span className="builder_interface_buildOptions_options">
        <h3>Size:</h3>
        {pizzaSizesData.map((size) => (
          <motion.button
            type="button"
            className="builderBtnSize btn-primary"
            id={`${size.id}-Btn`}
            key={size.id}
            onClick={handleClick}
          >
            {size.name}
          </motion.button>
        ))}
      </span>
      <span className="builder_interface_buildOptions_options">
        <h2>Style:</h2>
        {pizzaStylesData.map((style) => (
          <motion.button
            variants={primaryBtnVariants}
            type="button"
            className="builderBtnStyle btn-primary"
            id={`${style.id}-Btn`}
            key={style.id}
            onClick={handleClick}
          >
            {style.name}
          </motion.button>
        ))}
      </span>
      {pizza.size && pizza.style && (
        <span className="builder_interface_buildOptions_continue">
          <Link to="/sauce">
            <motion.button
              type="button"
              className="builderBtn btn-big"
              variants={pizzaOptionsVariants}
              whileHover="hover"
              initial="initial"
              animate="animate"
              exit="exit"
              key="base-continueBtn"
            >
              CONTINUE
            </motion.button>
          </Link>
        </span>
      )}
    </motion.section>
  );
};

Base.propTypes = {
  pizza: PropTypes.object.isRequired,
  setPizzaStyle: PropTypes.func.isRequired,
  setPizzaSize: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
};

export default Base;
