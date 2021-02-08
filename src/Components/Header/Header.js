import React from 'react';
import { Link as a } from 'react-router-dom';

const Header = () => (
  <section className="header">
    <a href="/">
      <img
        alt="logo"
        src="https://res.cloudinary.com/diby2nljo/image/upload/v1611685411/Pizza%20Maker/favpng_pizza-logo-royalty-free-illustration_ewzlnw.png"
      />
    </a>
    <a href="/">
      <h1>BUILD-A-PIZZA</h1>
    </a>
  </section>
);

export default Header;
