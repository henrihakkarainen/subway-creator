import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavigateButtons from './NavigateButtons';

import { containerVariants, listVariants } from './motion-variants';

const Sauces = ({ addSauce, sub }) => {
  const [ t ] = useTranslation();

  const dressings = Object.values(
    t('sauces', { returnObjects: true }) // Return list from translations
  )
  .sort((a,b) => {
    if (a === t('sauces.no')) return 1
    else if (b === t('sauces.no')) return -1
    else return a < b ? - 1 : 1
  }); // Sort from A->Z, No-option will be the last one

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>{t('steps.7')} {sub.sauces.length === 0 ? '*' : ''}</h3>
      <ul>
        {dressings.map(dressing => {
          const spanClass = sub.sauces.includes(dressing) ? 'active' : '';
          return (
            <motion.li
              key={dressing}
              onClick={() => addSauce(dressing)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ dressing }</span>
            </motion.li>
          )
        })}
      </ul>

      <div className="divider">
        <span>
          {sub.sauces.length !== 0 ?
            `${t('selected')}: ${sub.sauces.sort().join(', ')}` :
            `* ${t('tooltips.pickOne')}`
          }
        </span>
      </div>

      <NavigateButtons
        prevRoute='/veggies'
        nextRoute='/spices'
        condition={sub.sauces.length !== 0}
      />
    </motion.div>
  )
}

export default Sauces;