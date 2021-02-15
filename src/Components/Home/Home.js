import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { pizzaOptionsVariants } from '../../Data/animations';

const Home = ({ changeBuildActive, changeLocation }) => {
  const handleClick = () => changeBuildActive(true);

  changeLocation(useLocation().pathname);

  return (
    <motion.section
      className="builder_interface_home"
      variants={pizzaOptionsVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="builder_interface_home_introtext">
        <h2>BUILD YOUR ULTIMATE PIZZA</h2>
        <p>
          Tempor adipisicing fugiat officia ipsum laboris ex nostrud qui do. Minim nisi deserunt ut
          anim sunt occaecat elit anim. Commodo aliquip qui in Lorem minim. Aute magna do et
          excepteur anim minim fugiat ullamco dolor sunt labore. Aute labore esse aliqua Lorem duis.
        </p>
      </section>
      <section className="builder_interface_home_symbolContainer">
        <img
          alt="pizza symbol"
          src="https://res.cloudinary.com/diby2nljo/image/upload/v1613159144/Pizza%20Maker/pizza_vector.svg"
        />
        <Link to="/base">
          <motion.button
            type="button"
            className="btn-big"
            onClick={handleClick}
            variants={pizzaOptionsVariants}
            whileHover="hover"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            START BUILDING YOUR PIZZA
          </motion.button>
        </Link>
      </section>
    </motion.section>
  );
};

Home.propTypes = {
  changeBuildActive: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
};

export default Home;
