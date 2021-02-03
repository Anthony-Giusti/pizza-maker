import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import ToppingDropDown from '../ToppingDropDown/ToppingDropDown';

import primaryBtnVariants from '../../Data/animations';

const Topping = ({
  ingredient,
  setPizzaToppings,
  setPizzaToppingLayout,
  setPizzaToppingUI,
  formatName,
  pizza,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIngrediant = (e) => {
    setPizzaToppings(e);
    setIsOpen((prevCheck) => !prevCheck);
  };

  const formattedName = formatName(ingredient.name);

  useEffect(() => {
    for (let i = 0; i < pizza.toppings.length; i += 1) {
      if (pizza.toppings[i].topping === formattedName) {
        setIsOpen(true);
        return;
      }
    }
  }, []);

  return (
    <span className="builder_toppings_topping">
      <motion.button
        variants={primaryBtnVariants}
        whileHover="whileHover"
        whileFocus="whileFocus"
        animate={{ borderColor: isOpen ? 'rgb(255,255,255)' : '' }}
        type="button"
        className="btn-primary builder_toppings_topping_btn"
        id={`${formattedName}-Btn`}
        onClick={handleIngrediant}
      >
        {ingredient.name}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <ToppingDropDown
            pizza={pizza}
            isOpen={isOpen}
            formattedName={formattedName}
            setPizzaToppingLayout={setPizzaToppingLayout}
            setPizzaToppingUI={setPizzaToppingUI}
          />
        )}
      </AnimatePresence>
      {ingredient.description && <p>{ingredient.description}</p>}
    </span>
  );
};

Topping.propTypes = {
  setPizzaToppings: PropTypes.func.isRequired,
  setPizzaToppingLayout: PropTypes.func.isRequired,
  setPizzaToppingUI: PropTypes.func.isRequired,
  formatName: PropTypes.func.isRequired,
  ingredient: PropTypes.string.isRequired,
  pizza: PropTypes.object.isRequired,
};

export default Topping;
