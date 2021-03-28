import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import fin from '../images/fin.png';
import uk from '../images/uk.png';

const backdrop = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2
    }
  }
}

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.2
    }
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
}

const button = {
  hover: {
    scale: 1.1
  }
}

const svg = {
  hover: {
    scale: 1.4,
    rotate: -90
  },
  click: {
    scale: 1
  }
}

const Language = ({ showModal, closeModal, changeLanguage }) => {
  const [ t ] = useTranslation();

  return (
    <AnimatePresence exitBeforeEnter>
      { showModal && (
        <motion.div
          className="modal-backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="modal-content"
            variants={modal}
          >
            <motion.svg
              className="svg-close"
              viewBox="0 0 20 20"
              onClick={() => closeModal(false)}
              variants={svg}
              whileTap="click"
              whileHover="hover"
            >
							<path
                fill="none"
                d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,
                   4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,
                   0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,
                   0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,
                   0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,
                   0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,
                   0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,
                   15.898,4.045z"
              />
						</motion.svg>
            <h2>{t('selectLanguage')}</h2>
            <motion.button
              onClick={() => changeLanguage('en')}
              variants={button}
              whileHover="hover"
            >
              <img className="icon" src={uk} alt="UK"></img>
              {t('english')}
            </motion.button>
            <motion.button
              onClick={() => changeLanguage('fi')}
              variants={button}
              whileHover="hover"
            >
              <img className="icon" src={fin} alt="FIN"></img>
              {t('finnish')}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Language;