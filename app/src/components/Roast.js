import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavigateButtons from './NavigateButtons';

import { containerVariants, listVariants } from './motion-variants';

const Roast = ({ setRoast, sub }) => {
  const [ t ] = useTranslation();

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>{t('steps.4')}</h3>
      <ul>
        <motion.li
          onClick={() => setRoast(true)}
          variants={listVariants}
          whileHover="hover"
        >
          <span className={sub.roast ? 'active' : ''}>{t('yes')}</span>
        </motion.li>
        <motion.li
          onClick={() => setRoast(false)}
          variants={listVariants}
          whileHover="hover"
        >
          <span className={!sub.roast ? 'active' : ''}>{t('no')}</span>
        </motion.li>
      </ul>

      <div className="divider">
        <span>
          {sub.roast ?
              t('roast.yes') :
              t('roast.no')
          }
        </span>
      </div>

      <NavigateButtons
        prevRoute='/cheese'
        nextRoute='/extras'
      />

    </motion.div>
  )
}

export default Roast;