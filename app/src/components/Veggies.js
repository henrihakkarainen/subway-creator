import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavigateButtons from './NavigateButtons';

import { containerVariants, listVariants } from './motion-variants';

const Veggies = ({ addVegetable, sub }) => {
  const [ t ] = useTranslation();

  let toppings = Object.values(
    t('veggies', { returnObjects: true }) // Return list from translations
  )
  .sort((a,b) => {
    if (a === t('veggies.no')) return 1
    else if (b === t('veggies.no')) return -1
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
      <h3>{t('steps.6')} {sub.veggies.length === 0 ? '*' : ''}</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = sub.veggies.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addVegetable(topping)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <div className="divider">
        <span>
          {sub.veggies.length !== 0 ?
            `${t('selected')}: ${sub.veggies.sort().join(', ')}` :
            `* ${t('tooltips.pickOne')}`
          }
        </span>
      </div>

      <NavigateButtons
        prevRoute='/extras'
        nextRoute='/sauces'
        condition={sub.veggies.length !== 0}
      />

    </motion.div>
  )
}

export default Veggies;