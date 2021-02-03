import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { pizzaSaucesData, pizzaCheesesData } from '../../Data/pizzaData';

import primaryBtnVariants from '../../Data/animations';

const Sauce = ({ setPizzaSauce, setPizzaCheese, formatName, pizza }) => {
  const handleClick = (e) => {
    const { target } = e;
    const { children } = target.parentNode;
    if (target.classList.contains('builder_sauces_btn')) {
      setPizzaSauce(e);
    } else {
      setPizzaCheese(e);
    }

    for (let i = 0; i < children.length; i += 1) {
      console.log(children[i]);
      children[i].classList.remove('btn-primary-selected');
    }
    target.classList.add('btn-primary-selected');
  };

  useEffect(() => {
    if (pizza.sauce) {
      document.getElementById(`${pizza.sauce.sauce}-Btn`).classList.add('btn-primary-selected');
    }
    if (pizza.cheese) {
      document.getElementById(`${pizza.cheese.cheese}-Btn`).classList.add('btn-primary-selected');
    }
  });

  return (
    <section className="sauce buildOption">
      <h2>PICK YOUR SAUCE</h2>
      <span className="builder_sauces">
        {pizzaSaucesData.map((sauce) => {
          const formattedName = formatName(sauce.name);
          return (
            <motion.button
              variants={primaryBtnVariants}
              // whileHover="whileHover"
              // whileFocus="whileFocus"
              type="button"
              className="builder_sauces_btn btn-primary"
              id={`${formattedName}-Btn`}
              onClick={handleClick}
            >
              {sauce.name}
            </motion.button>
          );
        })}
      </span>
      <h2>PICK YOUR CHEESE</h2>
      <span className="builder_cheeses">
        {pizzaCheesesData.map((cheese) => {
          const formattedName = formatName(cheese.name);
          return (
            <motion.button
              variants={primaryBtnVariants}
              type="button"
              className="builder_sizes_btn btn-primary"
              id={`${formattedName}-Btn`}
              onClick={handleClick}
            >
              {cheese.name}
            </motion.button>
          );
        })}
      </span>
    </section>
  );
};

Sauce.propTypes = {
  formatName: PropTypes.func.isRequired,
  setPizzaSauce: PropTypes.func.isRequired,
  setPizzaCheese: PropTypes.func.isRequired,
  pizza: PropTypes.func.isRequired,
};

export default Sauce;
