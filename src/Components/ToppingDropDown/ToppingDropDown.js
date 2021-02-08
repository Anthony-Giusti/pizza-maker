import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ToppingDropDown = ({
  pizza,
  isOpen,
  formattedName,
  setPizzaToppingLayout,
  setPizzaToppingUI,
}) => {
  const layoutVariants = {
    whileHover: { backgroundColor: 'rgb(255,255,255)' },
  };

  const handleClick = (e) => {
    setPizzaToppingLayout(e);
  };

  useEffect(() => {
    if (isOpen) {
      let target;
      for (let i = 0; i < pizza.toppings.length; i += 1) {
        if (pizza.toppings[i].id === formattedName) {
          target = document.getElementById(`${formattedName}-${pizza.toppings[i].layout}`);
          setPizzaToppingUI(target);
        }
      }
    }
  }, []);

  return (
    <motion.span
      key={`${formattedName} layout`}
      initial={{ opacity: 0, y: -35 }}
      animate={{ opacity: 1, y: -6 }}
      exit={{ opacity: 0, y: -35 }}
      transition={{ type: 'tween' }}
      className="builder_toppings_topping_layout"
    >
      <motion.button
        variants={layoutVariants}
        whileHover="whileHover"
        type="button"
        className="builder_toppings_topping_layout_btn btn-secondary btnSelected"
        onClick={handleClick}
        id={`${formattedName}-full`}
      >
        <svg width="20" height="20">
          <circle className="layout_circle" cx="10" cy="10" r="10" fill="orange" />
        </svg>
      </motion.button>
      <motion.button
        variants={layoutVariants}
        whileHover="whileHover"
        type="button"
        className="builder_toppings_topping_layout_btn btn-secondary"
        onClick={handleClick}
        id={`${formattedName}-right`}
      >
        <svg width="20" height="20">
          <motion.circle cx="50" cy="50" r="50" fill="grey" transform="rotate(200)" />
          <path d="M0,50 a1,1 0 0,0 20,0" fill="orange" transform="translate(-45,20) rotate(-90)" />
        </svg>
      </motion.button>
      <motion.button
        variants={layoutVariants}
        whileHover="whileHover"
        type="button"
        className="builder_toppings_topping_layout_btn btn-secondary"
        onClick={handleClick}
        id={`${formattedName}-left`}
      >
        <svg width="20" height="20">
          <motion.circle cx="50" cy="50" r="50" fill="grey" transform="rotate(200)" />
          <path d="M0,50 a1,1 0 0,0 20,0" fill="orange" transform="translate(60,0) rotate(90)" />
        </svg>
      </motion.button>
    </motion.span>
  );
};

ToppingDropDown.propTypes = {
  pizza: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setPizzaToppingLayout: PropTypes.func.isRequired,
  formattedName: PropTypes.string.isRequired,
  setPizzaToppingUI: PropTypes.func.isRequired,
};

export default ToppingDropDown;
