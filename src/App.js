import React, { useState } from 'react';

import Header from './Components/Header/Header';
import Builder from './Components/Builder/Builder';
import Footer from './Components/Footer/Footer';

import {
  pizzaSizesData,
  pizzaStylesData,
  pizzaSaucesData,
  pizzaCheesesData,
  pizzaToppingsData,
} from './Data/pizzaData';

import './styles/reset.css';
import './styles/App.css';
// import { element } from 'prop-types';

function App() {
  const [pizza, setPizza] = useState({
    size: null,
    style: null,
    sauce: null,
    cheese: null,
    toppings: [],
  });
  const [buildStarted, setBuildStarted] = useState(false);
  const [navLocation, setNavLocation] = useState();

  const switchNavLocation = (location) => {
    let x = location.pathname.substring(1);
    if (x === '') {
      x = 'home';
    }
    setNavLocation(x);
  };

  const startBuilding = () => setBuildStarted(true);

  const findId = (element, id) => {
    for (let i = 0; i < element.length; i += 1) {
      if (element[i].id === id) {
        return element[i];
      }
    }
  };

  const setPizzaStyle = (e) => {
    const newStyleId = e.target.id.split('-')[0];
    const style = findId(pizzaStylesData, newStyleId);
    setPizza({ ...pizza, style: { name: style.name, id: newStyleId } });
  };
  const setPizzaSize = (e) => {
    const newSizeId = e.target.id.split('-')[0];
    const size = findId(pizzaSizesData, newSizeId);
    setPizza({ ...pizza, size: { name: size.name, id: newSizeId } });
  };

  const setPizzaSauce = (e) => {
    const newSauceId = e.target.id.split('-')[0];
    const sauce = findId(pizzaSaucesData, newSauceId);
    setPizza({ ...pizza, sauce: { name: sauce.name, id: newSauceId, img: sauce.img } });
  };

  const setPizzaCheese = (e) => {
    const newCheeseId = e.target.id.split('-')[0];
    const cheese = findId(pizzaCheesesData, newCheeseId);
    setPizza({ ...pizza, cheese: { name: cheese.name, id: newCheeseId, img: cheese.img } });
  };

  const setPizzaToppings = (e) => {
    const newToppingId = e.target.id.split('-')[0];
    let newToppings;

    if (pizza.toppings.every((element) => element.id !== newToppingId)) {
      const topping = findId(pizzaToppingsData, newToppingId);
      newToppings = [
        ...pizza.toppings,
        {
          name: topping.name,
          id: newToppingId,
          layout: 'full',
          type: topping.type,
          img: topping.img.full,
        },
      ];
    } else {
      newToppings = pizza.toppings.filter((element) => element.id !== newToppingId);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const setPizzaToppingUI = (e) => {
    const { children } = e.parentNode;
    for (let i = 0; i < children.length; i += 1) {
      children[i].classList.remove('btnSelected');
    }
    e.classList.add('btnSelected');
  };

  const setPizzaToppingLayout = (e) => {
    const [toppingId, layout] = e.target.id.split('-');
    const newToppings = pizza.toppings.filter((element) => element.id !== toppingId);
    const topping = findId(pizzaToppingsData, toppingId);

    newToppings.push({
      name: topping.name,
      id: toppingId,
      type: topping.type,
      layout,
      img: topping.img[layout],
    });
    setPizza({ ...pizza, toppings: newToppings });

    setPizzaToppingUI(e.target);
  };

  return (
    <div className="App">
      <Header />
      <Builder
        switchNavLocation={switchNavLocation}
        navLocation={navLocation}
        pizza={pizza}
        buildStarted={buildStarted}
        startBuilding={startBuilding}
        setPizzaStyle={setPizzaStyle}
        setPizzaSize={setPizzaSize}
        setPizzaSauce={setPizzaSauce}
        setPizzaCheese={setPizzaCheese}
        setPizzaToppings={setPizzaToppings}
        setPizzaToppingLayout={setPizzaToppingLayout}
        setPizzaToppingUI={setPizzaToppingUI}
      />
      <Footer />
    </div>
  );
}

export default App;
