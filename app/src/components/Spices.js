import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavigateButtons from './NavigateButtons';

import { containerVariants, listVariants } from './motion-variants';

const Spices = ({ addSpice, sub }) => {
  const [ t ] = useTranslation();

  const spices = Object.values(
    t('spices', { returnObjects: true }) // Return list from translations
  )
  .sort(); // Sort from A->Z

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>{t('steps.8')}</h3>
      <ul>
        {spices.map(spice => {
          const spanClass = sub.spices.includes(spice) ? 'active' : '';
          return (
            <motion.li
              key={spice}
              onClick={() => addSpice(spice)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ spice }</span>
            </motion.li>
          )
        })}
      </ul>

      <div className="divider">
        <span>{t('tooltips.spices')}</span>
      </div>

      <NavigateButtons
        prevRoute='/sauces'
        nextRoute='/confirm'
      />

    </motion.div>
  )
}

export default Spices;