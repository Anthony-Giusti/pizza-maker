import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { pizzaSaucesData, pizzaCheesesData } from '../../Data/pizzaData';
import { pizzaOptionsVariants, primaryBtnVariants } from '../../Data/animations';

const Sauce = ({ setPizzaSauce, setPizzaCheese, pizza }) => {
  const handleClick = (e) => {
    const { target } = e;
    const { children } = target.parentNode;
    if (target.classList.contains('builder_sauces_btn')) {
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
      className="sauce buildOption"
      variants={pizzaOptionsVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>PICK YOUR SAUCE</h2>
      <span className="builder_sauces">
        {pizzaSaucesData.map((sauce) => (
          <motion.button
            variants={primaryBtnVariants}
            type="button"
            className="builder_sauces_btn btn-primary"
            id={`${sauce.id}-Btn`}
            key={sauce.id}
            onClick={handleClick}
          >
            {sauce.name}
          </motion.button>
        ))}
      </span>
      <h2>PICK YOUR CHEESE</h2>
      <span className="builder_cheeses">
        {pizzaCheesesData.map((cheese) => (
          <motion.button
            variants={primaryBtnVariants}
            type="button"
            className="builder_sizes_btn btn-primary"
            id={`${cheese.id}-Btn`}
            key={cheese.id}
            onClick={handleClick}
          >
            {cheese.name}
          </motion.button>
        ))}
      </span>
      {pizza.sauce && pizza.cheese && (
        <span className="builder_continue">
          <Link to="/Toppings">
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
};

Sauce.propTypes = {
  setPizzaSauce: PropTypes.func.isRequired,
  setPizzaCheese: PropTypes.func.isRequired,
  pizza: PropTypes.object.isRequired,
};

export default Sauce;
