import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import BuilderProgressBar from '../BuilderProgressBar/BuilderProgressBar';
import BuilderPizza from '../BuilderPizza/BuilderPizza';
import Home from '../Home/Home';
import Base from '../Base/Base';
import Sauce from '../Sauce/Sauce';
import Toppings from '../Toppings/Toppings';
import Order from '../Order/Order';

const Builder = ({
  pizza,
  changeBuildActive,
  buildActive,
  setPizzaStyle,
  setPizzaSize,
  setPizzaCheese,
  setPizzaSauce,
  setPizzaToppings,
  setPizzaToppingLayout,
  setPizzaToppingUI,
  changeLocation,
  createMissingValuesString,
}) => (
  <section className="builder">
    <section className="builder_background">
      <BuilderProgressBar />

      <section className="builder_interface">
        <AnimatePresence>
          <Switch>
            <Route path="/" exact comp={Home}>
              <Home changeBuildActive={changeBuildActive} changeLocation={changeLocation} />
            </Route>
            <Route path="/base" comp={Base}>
              <Base
                pizza={pizza}
                setPizzaSize={setPizzaSize}
                setPizzaStyle={setPizzaStyle}
                changeLocation={changeLocation}
              />
            </Route>
            <Route path="/sauce" comp={Sauce}>
              <Sauce
                setPizzaSauce={setPizzaSauce}
                setPizzaCheese={setPizzaCheese}
                pizza={pizza}
                changeLocation={changeLocation}
              />
            </Route>
            <Route path="/toppings" comp={Toppings}>
              <Toppings
                setPizzaToppings={setPizzaToppings}
                setPizzaToppingLayout={setPizzaToppingLayout}
                setPizzaToppingUI={setPizzaToppingUI}
                pizza={pizza}
                changeLocation={changeLocation}
                changeBuildActive={changeBuildActive}
                createMissingValuesString={createMissingValuesString}
              />
            </Route>
            <Route path="/order" comp={Order}>
              <Order
                changeLocation={changeLocation}
                pizza={pizza}
                changeBuildActive={changeBuildActive}
              />
            </Route>
          </Switch>

          {buildActive && <BuilderPizza pizza={pizza} />}
        </AnimatePresence>
      </section>
    </section>
  </section>
);

Builder.propTypes = {
  pizza: PropTypes.object.isRequired,
  changeBuildActive: PropTypes.func.isRequired,
  buildActive: PropTypes.bool.isRequired,
  setPizzaStyle: PropTypes.func.isRequired,
  setPizzaSauce: PropTypes.func.isRequired,
  setPizzaSize: PropTypes.func.isRequired,
  setPizzaCheese: PropTypes.func.isRequired,
  setPizzaToppings: PropTypes.func.isRequired,
  setPizzaToppingLayout: PropTypes.func.isRequired,
  setPizzaToppingUI: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  createMissingValuesString: PropTypes.func.isRequired,
};

export default Builder;
