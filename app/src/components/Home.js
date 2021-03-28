import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
};

const elemVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Home = ({ reset, openModal }) => {
  const [ t ] = useTranslation();
  return (
    <motion.div
      className="home container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.h1
        variants={elemVariants}
      >
        {t('welcome')}
      </motion.h1>
      <Link to="/sub" onClick={() => reset()}>
        <motion.button
          variants={elemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 12px #000',
            transition: {
              repeat: Infinity,
              duration: 0.3,
              repeatType: 'reverse'
            }
          }}
        >
          {t('designSub')}&#174;
        </motion.button>
      </Link>
      <motion.h2
        variants={elemVariants}
      >
        {t('or')}
      </motion.h2>
      <motion.button
        variants={elemVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 0px 12px #000',
          transition: {
            duration: 0.3
          }
        }}
        onClick={() => {
          document.activeElement.blur();
          openModal(true);
        }}
      >
        {t('changeLanguage')}
      </motion.button>
    </motion.div>
  )
}

export default Home;