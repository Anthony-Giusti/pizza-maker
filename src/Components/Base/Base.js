import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { pizzaSizesData, pizzaStylesData } from '../../Data/pizzaData';
import { pizzaOptionsVariants, primaryBtnVariants } from '../../Data/animations';

const Base = ({ pizza, setPizzaStyle, setPizzaSize }) => {
  const handleClick = (e) => {
    const { target } = e;
    const { children } = target.parentNode;
    if (target.classList.contains('builder_sizes_btn')) {
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
  });

  return (
    <motion.section
      className="builder_buildOptions"
      variants={pizzaOptionsVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>PICK YOUR BASE</h2>
      <span className="builder_sizes">
        <h3>Size:</h3>
        {pizzaSizesData.map((size) => (
          <motion.button
            type="button"
            className="builder_sizes_btn btn-primary"
            id={`${size.id}-Btn`}
            key={size.id}
            onClick={handleClick}
          >
            {size.name}
          </motion.button>
        ))}
      </span>
      <span className="builder_styles">
        <h2>Style:</h2>
        {pizzaStylesData.map((style) => (
          <motion.button
            variants={primaryBtnVariants}
            type="button"
            className="builder_styles_btn btn-primary"
            id={`${style.id}-Btn`}
            key={style.id}
            onClick={handleClick}
          >
            {style.name}
          </motion.button>
        ))}
      </span>
      {pizza.size && pizza.style && (
        <span className="builder_continue">
          <Link to="/sauce">
            <motion.button
              type="button"
              className="builder_styles_btn btn-continue"
              variants={pizzaOptionsVariants}
              whileHover="hover"
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
};

Base.propTypes = {
  pizza: PropTypes.object.isRequired,
  setPizzaStyle: PropTypes.func.isRequired,
  setPizzaSize: PropTypes.func.isRequired,
};

export default Base;
