import React from 'react';
import { Link } from 'react-router-dom';

const BuilderNav = () => (
  <section className="builder_nav">
    <Link to="/base" className="builder_nav_selected_parent">
      <button type="button" id="builder_nav-baseBtn" className="builder_nav_selected">
        SIZE AND BASE
      </button>
    </Link>
    <Link to="/sauce">
      <button type="button" id="builder_nav-sauceBtn">
        SAUCE AND CHEESE
      </button>
    </Link>
    <Link to="/toppings">
      <button type="button" id="builder_nav-toppingsBtn">
        TOPPINGS
      </button>
    </Link>
    <Link to="/toppings">
      <button type="button" id="builder_nav-orderBtn">
        ORDER
      </button>
    </Link>
  </section>
);

export default BuilderNav;
