import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { getElementError } from '@testing-library/react';
import { pizzaSizes, pizzaStyles } from '../../Data/pizzaData';

import primaryBtnVariants from '../../Data/animations';

const Base = ({ pizza, setPizzaBase, setPizzaStyle, setPizzaSize, formatName, formatSize }) => {
  const handleClick = (e) => {
    const { target } = e;
    const { children } = target.parentNode;
    if (target.classList.contains('builder_sizes_btn')) {
      setPizzaSize(e);
    } else {
      setPizzaStyle(e);
    }

    for (let i = 0; i < children.length; i += 1) {
      console.log(children[i]);
      children[i].classList.remove('btn-primary-selected');
    }
  };

  useEffect(() => {
    if (pizza.size) {
      document.getElementById(`${pizza.size}-Btn`).classList.add('btn-primary-selected');
    }
    if (pizza.style) {
      document.getElementById(`${pizza.style}-Btn`).classList.add('btn-primary-selected');
    }
  });

  return (
    <section className="base buildOption">
      <h2>PICK YOUR BASE</h2>
      <span className="builder_sizes">
        <h3>Size:</h3>
        {pizzaSizes.sizes.map((size) => {
          const formattedSize = formatSize(size);
          return (
            <motion.button
              type="button"
              className="builder_sizes_btn btn-primary"
              id={`${formattedSize}-Btn`}
              key={formattedSize}
              onClick={handleClick}
            >
              {size}
            </motion.button>
          );
        })}
      </span>
      <span className="builder_styles">
        <h2>Style:</h2>
        {pizzaStyles.styles.map((style) => {
          const formattedName = formatName(style.name);
          return (
            <motion.button
              variants={primaryBtnVariants}
              type="button"
              className="builder_styles_btn btn-primary"
              id={`${formattedName}-Btn`}
              onClick={handleClick}
            >
              {style.name}
            </motion.button>
          );
        })}
      </span>
    </section>
  );
};

Base.propTypes = {
  pizza: PropTypes.object.isRequired,
  setPizzaBase: PropTypes.func.isRequired,
  setPizzaStyle: PropTypes.func.isRequired,
  setPizzaSize: PropTypes.func.isRequired,
  formatName: PropTypes.func.isRequired,
  formatSize: PropTypes.func.isRequired,
};

export default Base;
