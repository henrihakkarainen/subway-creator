import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavigateButtons from './NavigateButtons';

import { containerVariants, listVariants } from './motion-variants';

const Extras = ({ addExtra, sub }) => {
  const [ t ] = useTranslation();

  const extras = Object.values(
    t('extras', { returnObjects: true }) // Return list from translations
  )
  .sort() // Sort from A->Z
  .filter(item =>
    sub.cheese !== t('cheeses.no') ||
    (sub.cheese === t('cheeses.no') && item !== t('extras.dc'))
  ); // Filter Double Cheese when user has selected No cheese option on step 3.

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <h3>{t('steps.5')}</h3>
      <ul>
        {extras.map(extra => {
          let spanClass = sub.extras.includes(extra) ? 'active' : '';
          return (
            <motion.li
              key={extra}
              onClick={() => addExtra(extra)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ extra }</span>
            </motion.li>
          )
        })}
      </ul>

      <div className="divider">
        <span>{t('tooltips.extras')}</span>
      </div>

      <NavigateButtons
        prevRoute='/roast'
        nextRoute='/veggies'
      />

    </motion.div>
  )
}

export default Extras;