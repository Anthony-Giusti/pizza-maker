import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from './Components/Header/Header';
import Builder from './Components/Builder/Builder';
import Footer from './Components/Footer/Footer';

import {
  pizzaSizes,
  pizzaStyles,
  pizzaSaucesData,
  pizzaCheesesData,
  pizzaToppingsData,
  pizzaBase,
} from './Data/pizzaData';

import './styles/reset.css';
import './styles/App.css';

function App() {
  // const location = useLocation();
  const [pizza, setPizza] = useState({
    size: null,
    style: null,
    sauce: null,
    cheese: null,
    toppings: [],
  });
  const [navSelection, setNavSelection] = useState();

  const switchNavSelection = (location) => {
    let x = location.pathname.substring(1);
    if (x === '') {
      x = 'home';
    }
    setNavSelection(x);
  };

  const formatSize = (size) => size.toLowerCase().split(' (')[0];
  const formatName = (name) => name[0].toLowerCase() + name.slice(1).replace(/\s+/g, '');

  const setPizzaStyle = (style) => setPizza({ ...pizza, style: style.target.id.split('-')[0] });
  const setPizzaSize = (size) => setPizza({ ...pizza, size: size.target.id.split('-')[0] });

  const setPizzaSauce = (sauce) => {
    const newSauce = sauce.target.id.split('-')[0];
    let img;

    for (let i = 0; i < pizzaSaucesData.length; i += 1) {
      if (pizzaSaucesData[i].id === newSauce) {
        img = pizzaSaucesData[i].img;
        break;
      }
    }
    setPizza({ ...pizza, sauce: { sauce: newSauce, img } });
  };

  const setPizzaCheese = (cheese) => {
    const newCheese = cheese.target.id.split('-')[0];
    let img;

    for (let i = 0; i < pizzaCheesesData.length; i += 1) {
      if (pizzaCheesesData[i].id === newCheese) {
        img = pizzaCheesesData[i].img;
        break;
      }
    }
    setPizza({ ...pizza, cheese: { cheese: newCheese, img } });
  };

  const setPizzaToppings = (e) => {
    const newTopping = e.target.id.split('-')[0];
    let newToppings;
    let img;

    for (let i = 0; i < pizzaToppingsData.length; i += 1) {
      if (pizzaToppingsData[i].id === newTopping) {
        img = pizzaToppingsData[i].img.full;
        break;
      }
    }

    if (pizza.toppings.every((element) => element.topping !== newTopping)) {
      newToppings = [...pizza.toppings, { topping: newTopping, layout: 'full', img }];
    } else {
      newToppings = pizza.toppings.filter((element) => element.topping !== newTopping);
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
    const [topping, layout] = e.target.id.split('-');
    const newToppings = pizza.toppings.filter((element) => element.topping !== topping);
    let img;

    for (let i = 0; i < pizzaToppingsData.length; i += 1) {
      if (pizzaToppingsData[i].id === topping) {
        img = pizzaToppingsData[i].img[layout];
        break;
      }
    }

    newToppings.push({ topping, layout, img });
    setPizza({ ...pizza, toppings: newToppings });

    setPizzaToppingUI(e.target);
  };

  return (
    <div className="App">
      <Header />
      <Builder
        pizza={pizza}
        setPizzaStyle={setPizzaStyle}
        setPizzaSize={setPizzaSize}
        setPizzaSauce={setPizzaSauce}
        setPizzaCheese={setPizzaCheese}
        setPizzaToppings={setPizzaToppings}
        setPizzaToppingLayout={setPizzaToppingLayout}
        setPizzaToppingUI={setPizzaToppingUI}
        formatName={formatName}
        formatSize={formatSize}
      />
      <Footer />
    </div>
  );
}

export default App;
