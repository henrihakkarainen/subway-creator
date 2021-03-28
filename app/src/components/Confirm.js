import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const container = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2
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

const text = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
}

const button = {
  hidden: {
    opacity: 0,
    y: '-100px'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 7.5
    }
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 0px 8px #000',
    transition: {
      duration: 0.7
    }
  }
}

const arrow = {
  hover: {
    rotate: -360,
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'easeInOut',
      reverseType: 'loop'
    }
  }
}

const Confirm = ({ sub }) => {
  const [ t ] = useTranslation();

  return (
    <motion.div
      className="container order"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2 variants={text}>
        {t('confirm.review')}
      </motion.h2>
      <motion.p variants={text}>
        {t('confirm.titlePart1')}
        <span style={{ fontFamily: 'Quicksand-Bold' }}> {sub.filling} </span>
        {t('confirm.titlePart2')}
      </motion.p>
      <div className="confirm">
        <div>
          <motion.h4 variants={text}>{t('confirm.bread')}</motion.h4>
          <motion.p variants={text}>{sub.bread}</motion.p>
          <motion.h4 variants={text}>{t('confirm.cheese')}</motion.h4>
          <motion.p variants={text}>{sub.cheese}</motion.p>
          <motion.h4 variants={text}>{t('confirm.roast')}</motion.h4>
          <motion.p variants={text}>{sub.roast ? 'Yes' : 'No'}</motion.p>
          <motion.h4 variants={text}>{t('confirm.extras')}</motion.h4>
          {sub.extras.map(
            extra => <motion.p key={extra} variants={text}>{extra}</motion.p>
          )}
          <motion.p variants={text}>
            {sub.extras.length === 0 ? t('confirm.none') : ''}
          </motion.p>
        </div>
        <div>
          <motion.h4 variants={text}>{t('confirm.vegetables')}</motion.h4>
          {sub.veggies.map(
            vegetable => <motion.p key={vegetable} variants={text}>{vegetable}</motion.p>
          )}
        </div>
        <div>
          <motion.h4 variants={text}>{t('confirm.sauces')}</motion.h4>
          {sub.sauces.map(
            sauce => <motion.p key={sauce} variants={text}>{sauce}</motion.p>
          )}
          <motion.h4 variants={text}>{t('confirm.spices')}</motion.h4>
          {sub.spices.map(
            spice => <motion.p key={spice} variants={text}>{spice}</motion.p>
            )}
          <motion.p variants={text}>
            {sub.spices.length === 0 ? t('confirm.none') : ''}
          </motion.p>
        </div>
      </div>      

      <Link to="/">
        <motion.button variants={button} initial="hidden" animate="visible" whileHover="hover">
          <span>
          {t('confirm.startOver')}&nbsp;
            <motion.svg className="svg-button" viewBox="0 0 20 20"
              variants={arrow}
            >
							<path
                fill="none"
                d="M3.254,6.572c0.008,0.072,0.048,0.123,0.082,0.187c0.036,0.07,0.06,0.137,0.12,
                   0.187C3.47,6.957,3.47,6.978,3.484,6.988c0.048,0.034,0.108,0.018,0.162,0.035c0.057,
                   0.019,0.1,0.066,0.164,0.066c0.004,0,0.01,0,0.015,0l2.934-0.074c0.317-0.007,
                   0.568-0.271,0.56-0.589C7.311,6.113,7.055,5.865,6.744,5.865c-0.005,0-0.01,0-0.015,
                   0L5.074,5.907c2.146-2.118,5.604-2.634,7.971-1.007c2.775,1.912,3.48,5.726,1.57,
                   8.501c-1.912,2.781-5.729,3.486-8.507,1.572c-0.259-0.18-0.618-0.119-0.799,0.146c-0.18,
                   0.262-0.114,0.621,0.148,0.801c1.254,0.863,2.687,1.279,4.106,1.279c2.313,
                   0,4.591-1.1,6.001-3.146c2.268-3.297,1.432-7.829-1.867-10.101c-2.781-1.913-6.816-1.36-9.351,
                   1.058L4.309,3.567C4.303,3.252,4.036,3.069,3.72,3.007C3.402,3.015,3.151,
                   3.279,3.16,3.597l0.075,2.932C3.234,6.547,3.251,6.556,3.254,6.572z"
              />
						</motion.svg>
          </span>
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Confirm;