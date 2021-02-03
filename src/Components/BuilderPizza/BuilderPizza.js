/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes, { element } from 'prop-types';

const BuilderPizza = (pizza) => {
  const [pizzaBuild, setPizzaBuild] = useState();

  useEffect(() => {
    if (pizza.pizza) {
      const pizzaImages = [];

      if (pizza.pizza.sauce) {
        pizzaImages.push(pizza.pizza.sauce.img);
      }

      if (pizza.pizza.cheese) {
        pizzaImages.push(pizza.pizza.cheese.img);
      }

      pizza.pizza.toppings.forEach((element) => {
        console.log(element.img);
        pizzaImages.push(element.img);
      });
      setPizzaBuild(pizzaImages);
    }
  }, [pizza.pizza]);

  return (
    <section className="builder_pizza">
      <h2>Pizza goes here</h2>
      <span className="builder_pizza_container">
        <img
          alt="base of pizza"
          src="https://res.cloudinary.com/diby2nljo/image/upload/v1612210243/Pizza%20Maker/Pizza/pizzabase.png"
        />
        {pizzaBuild &&
          pizzaBuild.map((element) => (
            <img className="builder_pizza_topping" alt="" src={element} />
          ))}
      </span>
    </section>
  );
};

BuilderPizza.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default BuilderPizza;
