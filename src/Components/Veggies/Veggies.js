import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { pizzaVeggies } from '../../Data/pizzaData';

const Veggies = ({ setPizzaVeggie, formatName }) => (
  <section className="veggies buildOption">
    <h2>PICK YOUR VEGGIES</h2>
    {pizzaVeggies.veggies.map((veggie) => {
      const formattedName = formatName(veggie.name);
      return (
        <span className={`builder_veggies_${formattedName}`} key={formattedName}>
          <button
            type="button"
            className="builder_sizes_btn btn-secondary"
            id={`${formattedName}-Btn`}
            onClick={setPizzaVeggie}
          >
            {veggie.name}
          </button>
          {veggie.description && <p>{veggie.description}</p>}
        </span>
      );
    })}
  </section>
);

Veggies.propTypes = {
  setPizzaVeggie: PropTypes.func.isRequired,
  formatName: PropTypes.func.isRequired,
};

export default Veggies;
