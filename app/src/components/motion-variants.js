export const containerVariants = {
  hidden: {
    opacity: 0,
    x: '30vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      mass: 0.8,
      delay: 0.2,
      delayChildren: 0.4,
      ease: 'easeInOut'
    }
  },
  exit: {
    x: '-30vw',
    opacity: 0,
    transition: {
      ease: 'easeInOut'
    }
  }
};

export const listVariants = {
  hover: {
    scale: 1.3,
    color: '#fff',
    originX: 0,
    transition: {
      type: 'spring',
      stiffness: 250
    }
  }
}