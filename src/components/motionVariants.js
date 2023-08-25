const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
  tap: {
    scale: 0.9,
    transition: {
      duration: 1,
    },
  },
  hover: { scale: 1.2 },
};
const variantg = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export { variants, variantg };
