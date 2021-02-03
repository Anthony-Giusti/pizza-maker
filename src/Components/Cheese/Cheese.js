import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { pizzaCheeses } from '../../Data/pizzaData';

const Cheese = ({ setPizzaCheese, formatName }) => (
  <section className="cheese buildOption">
    <h2>PICK YOUR CHEESE</h2>
    <span className="builder_sauces">
      {pizzaCheeses.cheeses.map((cheese) => {
        const formattedName = formatName(cheese.name);
        return (
          <span className={`builder_cheeses_${formattedName}`} key={formattedName}>
            <button
              type="button"
              className="builder_sizes_btn btn-secondary"
              id={`${formattedName}-Btn`}
              onClick={setPizzaCheese}
            >
              {cheese.name}
            </button>
            {cheese.description && <p>{cheese.description}</p>}
          </span>
        );
      })}
    </span>
  </section>
);

Cheese.propTypes = {
  setPizzaCheese: PropTypes.func.isRequired,
  formatName: PropTypes.func.isRequired,
};

export default Cheese;
