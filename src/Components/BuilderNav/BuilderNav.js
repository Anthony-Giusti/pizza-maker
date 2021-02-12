import React from 'react';
import { Link } from 'react-router-dom';

const BuilderNav = () => (
  <section className="builder_nav">
    <Link to="/base">
      <button type="button" id="builder_nav-baseBtn">
        <p className="builder_nav_btnText">SIZE AND BASE</p>
      </button>
    </Link>
    <Link to="/sauce">
      <button type="button" id="builder_nav-sauceBtn">
        <p className="builder_nav_btnText"> SAUCE AND CHEESE</p>
      </button>
    </Link>
    <Link to="/toppings">
      <button type="button" id="builder_nav-toppingsBtn">
        <p className="builder_nav_btnText">TOPPINGS</p>
      </button>
    </Link>
    <Link to="/order">
      <button type="button" id="builder_nav-orderBtn">
        <p className="builder_nav_btnText">ORDER</p>
      </button>
    </Link>
  </section>
);

export default BuilderNav;
