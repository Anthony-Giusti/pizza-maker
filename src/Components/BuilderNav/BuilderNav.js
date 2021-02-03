import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const BuilderNav = () => (
  <section className="builder_nav">
    <Link to="/base">
      <button type="button">SIZE AND BASE</button>
    </Link>
    <Link to="/sauce">
      <button type="button">SAUCE AND CHEESE</button>
    </Link>
    <Link to="/protein">
      <button type="button">TOPPINGS</button>
    </Link>
  </section>
);

export default BuilderNav;
