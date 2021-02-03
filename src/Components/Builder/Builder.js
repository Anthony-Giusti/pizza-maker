import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import BuilderNav from '../BuilderNav/BuilderNav';
import BuilderPizza from '../BuilderPizza/BuilderPizza';
import Home from '../Home/Home';
import Base from '../Base/Base';
import Sauce from '../Sauce/Sauce';
import Toppings from '../Toppings/Toppings';

const Builder = ({
  pizza,
  setPizzaStyle,
  setPizzaSize,
  setPizzaCheese,
  setPizzaSauce,
  setPizzaToppings,
  setPizzaToppingLayout,
  setPizzaToppingUI,
  formatName,
  formatSize,
}) => (
  <section className="builder">
    <Router>
      <BuilderNav />
      <section className="builder_interface">
        <Switch>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route path="/base" component={Base}>
            <Base
              pizza={pizza}
              setPizzaSize={setPizzaSize}
              setPizzaStyle={setPizzaStyle}
              formatName={formatName}
              formatSize={formatSize}
            />
          </Route>
          <Route path="/sauce" component={Sauce}>
            <Sauce
              setPizzaSauce={setPizzaSauce}
              setPizzaCheese={setPizzaCheese}
              formatName={formatName}
              pizza={pizza}
            />
          </Route>
          <Route path="/protein" component={Toppings}>
            <Toppings
              setPizzaToppings={setPizzaToppings}
              setPizzaToppingLayout={setPizzaToppingLayout}
              setPizzaToppingUI={setPizzaToppingUI}
              formatName={formatName}
              pizza={pizza}
            />
          </Route>
        </Switch>
        <BuilderPizza pizza={pizza} />
      </section>
    </Router>
  </section>
);

Builder.propTypes = {
  pizza: PropTypes.object.isRequired,
  setPizzaStyle: PropTypes.func.isRequired,
  setPizzaSauce: PropTypes.func.isRequired,
  setPizzaSize: PropTypes.func.isRequired,
  setPizzaCheese: PropTypes.func.isRequired,
  setPizzaToppings: PropTypes.func.isRequired,
  setPizzaToppingLayout: PropTypes.func.isRequired,
  setPizzaToppingUI: PropTypes.func.isRequired,
  formatName: PropTypes.func.isRequired,
  formatSize: PropTypes.func.isRequired,
};

export default Builder;
