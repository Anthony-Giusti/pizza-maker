import React, { useEffect } from 'react';
import { BrowserRouter as Switch, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import BuilderNav from '../BuilderNav/BuilderNav';
import BuilderPizza from '../BuilderPizza/BuilderPizza';
import Home from '../Home/Home';
import Base from '../Base/Base';
import Sauce from '../Sauce/Sauce';
import Toppings from '../Toppings/Toppings';

const Builder = ({
  pizza,
  startBuilding,
  setPizzaStyle,
  setPizzaSize,
  setPizzaCheese,
  setPizzaSauce,
  setPizzaToppings,
  setPizzaToppingLayout,
  setPizzaToppingUI,
}) => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    const currentlocation = location.pathname.slice(1);
    if (currentlocation === '') {
      return;
    }
    console.log(currentlocation);
    const target = document.getElementById(`builder_nav-${currentlocation}Btn`);
    console.log(target);
    target.classList.add('builder_nav_selected');
    target.parentElement.classList.add('builder_nav_selected_parent');
  }, [location]);

  return (
    <section className="builder">
      <BuilderNav />

      <section className="builder_interface">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/" exact comp={Home}>
              <Home startBuilding={startBuilding} />
            </Route>
            <Route path="/base" comp={Base}>
              <Base pizza={pizza} setPizzaSize={setPizzaSize} setPizzaStyle={setPizzaStyle} />
            </Route>
            <Route path="/sauce" comp={Sauce}>
              <Sauce setPizzaSauce={setPizzaSauce} setPizzaCheese={setPizzaCheese} pizza={pizza} />
            </Route>
            <Route path="/toppings" comp={Toppings}>
              <Toppings
                setPizzaToppings={setPizzaToppings}
                setPizzaToppingLayout={setPizzaToppingLayout}
                setPizzaToppingUI={setPizzaToppingUI}
                pizza={pizza}
              />
            </Route>
          </Switch>
        </AnimatePresence>
        <BuilderPizza pizza={pizza} />
      </section>
    </section>
  );
};

Builder.propTypes = {
  pizza: PropTypes.object.isRequired,
  startBuilding: PropTypes.func.isRequired,
  setPizzaStyle: PropTypes.func.isRequired,
  setPizzaSauce: PropTypes.func.isRequired,
  setPizzaSize: PropTypes.func.isRequired,
  setPizzaCheese: PropTypes.func.isRequired,
  setPizzaToppings: PropTypes.func.isRequired,
  setPizzaToppingLayout: PropTypes.func.isRequired,
  setPizzaToppingUI: PropTypes.func.isRequired,
};

export default Builder;
