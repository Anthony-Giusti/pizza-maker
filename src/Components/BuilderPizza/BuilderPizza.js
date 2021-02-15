/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { builderWidgetVariants, pizzaBuildVariants } from '../../Data/animations';

const BuilderPizza = (pizza) => {
  const [pizzaBuild, setPizzaBuild] = useState();

  useEffect(() => {
    if (pizza.pizza) {
      const pizzaImages = [];

      if (pizza.pizza.sauce) {
        pizzaImages.push({
          name: pizza.pizza.sauce.id,
          img: pizza.pizza.sauce.img,
          className: 'builder_pizza_container_widgets_sauce',
        });
      }

      if (pizza.pizza.cheese) {
        pizzaImages.push({
          name: pizza.pizza.cheese.id,
          img: pizza.pizza.cheese.img,
          className: 'builder_pizza_container_widgets_cheese',
        });
      }

      pizza.pizza.toppings.forEach((element) => {
        const toppingType =
          element.type === 'protein'
            ? 'builder_pizza_container_widgets_protein'
            : 'builder_pizza_container_widgets_veggie';
        pizzaImages.push({
          name: element.id,
          img: element.img,
          className: toppingType,
        });
      });
      setPizzaBuild(pizzaImages);
    }
  }, [pizza.pizza]);

  return (
    <motion.section
      className="builder_pizza"
      variants={pizzaBuildVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key="builder-pizza"
    >
      <span className="builder_pizza_container">
        <span className="builder_pizza_container_widgets">
          {pizza.pizza.size && (
            <motion.p
              className="builder_pizza_container_widgets_size"
              variants={builderWidgetVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {pizza.pizza.size.name}
            </motion.p>
          )}

          {pizza.pizza.style && (
            <motion.p
              className="builder_pizza_container_widgets_style"
              variants={builderWidgetVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {pizza.pizza.style.name}
            </motion.p>
          )}

          {pizza.pizza.sauce && (
            <motion.p
              className="builder_pizza_container_widgets_sauce"
              variants={builderWidgetVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {pizza.pizza.sauce.name}
            </motion.p>
          )}

          {pizza.pizza.cheese && (
            <motion.p
              className="builder_pizza_container_widgets_cheese"
              variants={builderWidgetVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {pizza.pizza.cheese.name}
            </motion.p>
          )}

          {pizza.pizza.toppings.length > 0 &&
            pizza.pizza.toppings.map((element) => (
              <motion.p
                className={`builder_pizza_container_widgets_${element.type}`}
                variants={builderWidgetVariants}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
              >
                {element.name}
              </motion.p>
            ))}
        </span>
        <img
          alt="base of pizza"
          src="https://res.cloudinary.com/diby2nljo/image/upload/v1612210243/Pizza%20Maker/Pizza/pizzabase.png"
        />
        {pizzaBuild &&
          pizzaBuild.map((element) => (
            <img
              className="builder_pizza_topping"
              alt=""
              src={element.img}
              key={`builder-${element.name}-img`}
            />
          ))}
      </span>
    </motion.section>
  );
};

BuilderPizza.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default BuilderPizza;
