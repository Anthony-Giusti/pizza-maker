/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

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

function App() {
  const [pizza, setPizza] = useState({
    size: null,
    style: null,
    sauce: null,
    cheese: null,
    toppings: [],
    progress: { complete: false, missingValues: ['Size', 'Style', 'Sauce', 'Cheese'] },
  });

  const [buildActive, setBuildActive] = useState(false);

  const changeLocation = (x) => {
    if (!x) {
      return;
    }

    const location = x.substring(1);

    if (!location) {
      return;
    }

    if (location !== 'order' && location !== '/' && !buildActive) {
      setBuildActive(true);
    }

    const navNodes = document.querySelectorAll('.builder_progressBar')[0].childNodes;
    let i = 0;

    for (i; i < navNodes.length; i += 1) {
      navNodes[i].classList.add('builder_nav_selected_parent');
      navNodes[i].firstChild.classList.add('builder_nav_selected');

      if (navNodes[i].id.includes(location) || location === '/') {
        navNodes[i].classList.add('builder_nav_selected_parent-current');
        i += 1;
        for (i; i < navNodes.length; i += 1) {
          navNodes[i].classList.remove('builder_nav_selected_parent');
          navNodes[i].firstChild.classList.remove('builder_nav_selected');
          navNodes[i].classList.remove('builder_nav_selected_parent-current');
        }
        return;
      }
      navNodes[i].classList.remove('builder_nav_selected_parent-current');
    }
  };

  // toggle showing pizza build and reset pizza build if completed//

  const changeBuildActive = (value) => {
    setBuildActive(value);
    if (!value) {
      setPizza({
        size: null,
        style: null,
        sauce: null,
        cheese: null,
        toppings: [],
        progress: { complete: false, missingValues: ['Size', 'Style', 'Sauce', 'Cheese'] },
      });
    }
  };

  // for adding and removing elements from pizza//

  const findId = (element, id) => {
    for (let i = 0; i < element.length; i += 1) {
      if (element[i].id === id) {
        return element[i];
      }
    }
  };

  const setPizzaSize = (e) => {
    const newSizeId = e.target.id.split('-')[0];
    const size = findId(pizzaSizesData, newSizeId);
    const newMissingList = pizza.progress.missingValues.filter((value) => value !== 'Size');
    const complete = newMissingList.length === 0;

    setPizza({
      ...pizza,
      size: { name: size.name, id: newSizeId },
      progress: { complete, missingValues: newMissingList },
    });
  };

  const setPizzaStyle = (e) => {
    const newStyleId = e.target.id.split('-')[0];
    const style = findId(pizzaStylesData, newStyleId);
    const newMissingList = pizza.progress.missingValues.filter((value) => value !== 'Style');
    const complete = newMissingList.length === 0;

    setPizza({
      ...pizza,
      style: { name: style.name, id: newStyleId },
      progress: { complete, missingValues: newMissingList },
    });
  };

  const setPizzaSauce = (e) => {
    const newSauceId = e.target.id.split('-')[0];
    const sauce = findId(pizzaSaucesData, newSauceId);
    const newMissingList = pizza.progress.missingValues.filter((value) => value !== 'Sauce');
    const complete = newMissingList.length === 0;

    setPizza({
      ...pizza,
      sauce: { name: sauce.name, id: newSauceId, img: sauce.img },
      progress: { complete, missingValues: newMissingList },
    });
  };

  const setPizzaCheese = (e) => {
    const newCheeseId = e.target.id.split('-')[0];
    const cheese = findId(pizzaCheesesData, newCheeseId);
    const newMissingList = pizza.progress.missingValues.filter((value) => value !== 'Cheese');
    const complete = newMissingList.length === 0;

    setPizza({
      ...pizza,
      cheese: { name: cheese.name, id: newCheeseId, img: cheese.img },
      progress: { complete, missingValues: newMissingList },
    });
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

  // creating missing item string for last page if build incomplete //
  const createMissingValuesString = () => {
    const arr = pizza.progress.missingValues;

    if (arr.length === 1) {
      return `${arr[0]}`;
    }
    if (arr.length === 2) {
      return `${arr[0]} and ${arr[1]}`;
    }
    return `${arr.slice(0, arr.length - 1).join(', ')}, and ${arr.slice(-1)}`;
  };

  //= =//

  return (
    <div className="App">
      <Header />
      <Builder
        // navLocation={navLocation}
        pizza={pizza}
        buildActive={buildActive}
        changeBuildActive={changeBuildActive}
        setPizzaStyle={setPizzaStyle}
        setPizzaSize={setPizzaSize}
        setPizzaSauce={setPizzaSauce}
        setPizzaCheese={setPizzaCheese}
        setPizzaToppings={setPizzaToppings}
        setPizzaToppingLayout={setPizzaToppingLayout}
        setPizzaToppingUI={setPizzaToppingUI}
        changeLocation={changeLocation}
        createMissingValuesString={createMissingValuesString}
      />
      <Footer />
    </div>
  );
}

export default App;
