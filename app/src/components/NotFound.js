import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const container = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 1
    }
  },
  exit: {
    y: '40vh',
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}

const path = {
  hidden: {
    opacity: 0,
    scale: 0.4
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const titleAndButton = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.1
  }
}

const NotFound = () => {
  const [ t ] = useTranslation();

  return (
    <motion.div
      className="container notfound"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        variants={titleAndButton}
      >
        404 - {t('notfound.title')}
      </motion.h1>
      <div>
        <svg className="svg-error" viewBox="0 0 20 20">
          <motion.path
            fill="none"
            d="M13.864,6.136c-0.22-0.219-0.576-0.219-0.795,0L10,
              9.206l-3.07-3.07c-0.219-0.219-0.575-0.219-0.795,0c-0.219,0.22-0.219,0.576,
              0,0.795L9.205,10l-3.07,3.07c-0.219,0.219-0.219,0.574,0,0.794c0.22,0.22,
              0.576,0.22,0.795,0L10,10.795l3.069,3.069c0.219,0.22,0.575,0.22,0.795,
              0c0.219-0.22,0.219-0.575,0-0.794L10.794,10l3.07-3.07C14.083,6.711,14.083,
              6.355,13.864,6.136z M10,0.792c-5.086,0-9.208,4.123-9.208,9.208c0,5.085,
              4.123,9.208,9.208,9.208s9.208-4.122,9.208-9.208C19.208,4.915,15.086,0.792,10,
              0.792z M10,18.058c-4.451,0-8.057-3.607-8.057-8.057c0-4.451,3.606-8.057,
              8.057-8.057c4.449,0,8.058,3.606,8.058,8.057C18.058,14.45,14.449,18.058,10,
              18.058z"
            variants={path}
            initial="hidden"
            animate="visible"
            />
        </svg>
        <Link to="/">
          <motion.button
            variants={titleAndButton}
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 0px 12px #000',
              textShadow: '0px 0px 8px #fff',
              transition: {
                duration: 0.4
              }
            }}
          >
            {t('notfound.home')}
          </motion.button>
        </Link>
      </div>
      
    </motion.div>
  )
}

export default NotFound;