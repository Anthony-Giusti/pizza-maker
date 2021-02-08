import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { pizzaOptionsVariants } from '../../Data/animations';

const Home = () => (
  <motion.section
    className="home"
    variants={pizzaOptionsVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <p>
      Tempor adipisicing fugiat officia ipsum laboris ex nostrud qui do. Minim nisi deserunt ut anim
      sunt occaecat elit anim. Commodo aliquip qui in Lorem minim. Aute magna do et excepteur anim
      minim fugiat ullamco dolor sunt labore. Aute labore esse aliqua Lorem duis. In quis duis Lorem
      deserunt labore excepteur in labore aliquip pariatur occaecat elit adipisicing laboris. Anim
      cupidatat pariatur aute deserunt pariatur irure. Minim cillum in veniam ad.
    </p>
    <p>
      Ex aliquip in cillum voluptate nisi officia labore deserunt minim dolor. Eiusmod ea incididunt
      non velit eu ad quis commodo labore et do nulla veniam ipsum. Ut anim esse officia dolore
      excepteur ullamco non voluptate velit nulla ea dolor irure. Proident incididunt exercitation
      dolor nostrud aute est excepteur ea laborum ea deserunt cillum commodo.
    </p>
    <Link to="/base">
      <button type="button" className="btn-primary">
        START BUILDING
      </button>
    </Link>
  </motion.section>
);

export default Home;
