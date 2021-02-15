import React from 'react';

const BuilderProgressBar = () => (
  <section className="builder_progressBar">
    <span id="builder_progressBar-base">
      <p className="builder_progressBar-base_text">SIZE AND BASE</p>
    </span>
    <span id="builder_progressBar-sauce">
      <p className="builder_progressBar-sauce_text"> SAUCE AND CHEESE</p>
    </span>
    <span id="builder_progressBar-toppings">
      <p className="builder_progressBar-toppings_text">TOPPINGS</p>
    </span>
    <span id="builder_progressBar-order">
      <p className="builder_progressBar-order_text">ORDER</p>
    </span>
  </section>
);

export default BuilderProgressBar;
