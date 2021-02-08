const primaryBtnVariants = {
  whileHover: { borderColor: 'rgb(255,255,255)' },
  whileFocus: { borderColor: 'rgb(255,255,255)' },
};

const pizzaOptionsVariants = {
  initial: { x: -2000 },
  animate: { x: 0 },
  exit: { x: 2000 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const builderWidgetVariants = {
  initial: { y: -1500 },
  animate: { y: 0 },
  exit: { y: -1500 },
};

export { primaryBtnVariants, pizzaOptionsVariants, builderWidgetVariants };
