const primaryBtnVariants = {
  whileHover: { borderColor: 'rgb(255,255,255)' },
  whileFocus: { borderColor: 'rgb(255,255,255)' },
};

const pizzaOptionsVariants = {
  initial: { x: -1000 },
  animate: { x: 0 },
  exit: { x: 1800 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const pizzaBuildVariants = {
  initial: { x: 1000 },
  animate: { x: 0 },
  exit: { x: 1000 },
};

const builderWidgetVariants = {
  initial: { y: -1500 },
  animate: { y: 0 },
};

export { primaryBtnVariants, pizzaOptionsVariants, pizzaBuildVariants, builderWidgetVariants };
