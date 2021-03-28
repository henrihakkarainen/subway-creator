import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const nextVariants = {
  hidden: {
    y: '5vh',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.4
    }
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 0px 8px #000'
  }
};

const backVariants = {
  hidden: {
    y: '5vh',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.4
    }
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 0px 8px #000'
  }
}

const finishVariants = {
  hover: {
    scale: 1.1,
    boxShadow: '0px 0px 8px #000',
    transition: {
      repeat: Infinity,
      duration: 0.3,
      repeatType: 'reverse'
    }
  }
}

const NavigateButtons = ({ prevRoute, nextRoute, condition = true }) => {
  const [ t ] = useTranslation();

  const renderNext = () => {
    if (nextRoute === '/confirm') {
      return (
        <motion.div
          className="next"
          variants={nextVariants}
        >
            <Link to={nextRoute}>
              <motion.button
                variants={finishVariants}
                whileHover="hover"
              >
                <span>
                  {t('finish')}&nbsp;
                  <svg className="svg-button" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M9.917,0.875c-5.086,0-9.208,4.123-9.208,9.208c0,5.086,4.123,9.208,9.208,9.208s9.208-4.122,9.208-9.208
                         C19.125,4.998,15.003,0.875,9.917,0.875z M9.917,18.141c-4.451,0-8.058-3.607-8.058-8.058s3.607-8.057,8.058-8.057
                         c4.449,0,8.057,3.607,8.057,8.057S14.366,18.141,9.917,18.141z M13.851,6.794l-5.373,5.372L5.984,9.672
                         c-0.219-0.219-0.575-0.219-0.795,0c-0.219,0.22-0.219,0.575,0,0.794l2.823,2.823c0.02,0.028,0.031,0.059,0.055,0.083
                         c0.113,0.113,0.263,0.166,0.411,0.162c0.148,0.004,0.298-0.049,0.411-0.162c0.024-0.024,0.036-0.055,0.055-0.083l5.701-5.7
                         c0.219-0.219,0.219-0.575,0-0.794C14.425,6.575,14.069,6.575,13.851,6.794z"
                    />
                  </svg>
                </span>                
              </motion.button>
            </Link>
          </motion.div>
      )
    } else {
      return (
        <motion.div
          className="next"
          variants={nextVariants}
        >
            <Link to={nextRoute}>
              <motion.button
                variants={nextVariants}
                whileHover="hover"
              >
                <span>
                {t('next')}&nbsp;
                  <svg className="svg-button" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                         l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                         c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                         c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                         S1.293,9.212,1.729,9.212z"
                    />
                  </svg>
                </span>                
              </motion.button>
            </Link>
          </motion.div>
      )
    }
  }

  return (
    <div className="navigate-buttons">
        {prevRoute && (
        <motion.div
          className="prev"
          variants={backVariants}
        >
          <Link to={prevRoute}>
            <motion.button
              variants={backVariants}
              whileHover="hover"
            >
              <span>
                <svg className="svg-button" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
                       L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
                       c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
                       c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
                       S18.707,9.212,18.271,9.212z"
                  />
                </svg>
                &nbsp;{t('back')}
              </span>
            </motion.button>
          </Link>
        </motion.div>
        )}
        {condition && renderNext()}
      </div>
  )
}

export default NavigateButtons;