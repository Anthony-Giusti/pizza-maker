import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import { pizzaOptionsVariants } from '../../Data/animations';

const Order = ({ changeLocation, changeBuildActive }) => {
  const location = useLocation().pathname;

  const handleClick = () => {
    changeBuildActive(false);
  };

  useEffect(() => {
    changeLocation(location);
  });

  return (
    <motion.section
      className="builder_interface_order"
      variants={pizzaOptionsVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div>
        <h2>WOAH YOU'RE AWESOME</h2>
        <p>Thank you for your order! Your pizza is coming right up.</p>
        <div className="builder_interface_order_img-container">
          <img
            src="https://res.cloudinary.com/diby2nljo/image/upload/c_scale,q_auto:good,w_506/v1613172444/Pizza%20Maker/1658_U1RVRElPIEtBVCAzNzQtNDA_mcvlp4.png"
            alt="pizza delivery person"
          />
        </div>
        <Link to="/">
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
            ORDER AGAIN?
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

Order.propTypes = {
  changeLocation: PropTypes.func.isRequired,
  changeBuildActive: PropTypes.func.isRequired,
};

export default Order;
