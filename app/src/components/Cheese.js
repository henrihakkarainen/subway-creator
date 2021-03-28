import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavigateButtons from './NavigateButtons';

import { containerVariants, listVariants } from './motion-variants';

const Cheese = ({ addCheese, sub }) => {
  const [ t ] = useTranslation();

  const cheeseTypes = Object.values(
    t('cheeses', { returnObjects: true }) // Return list from translations
  )
  .sort((a,b) => {
    if (a === t('cheeses.no')) return 1
    else if (b === t('cheeses.no')) return -1
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

      <h3>{t('steps.3')} {!sub.cheese ? '*' : ''}</h3>
      <ul>
        {cheeseTypes.map(cheese => {
          let spanClass = sub.cheese === cheese ? 'active' : '';
          return (
            <motion.li
              key={cheese}
              onClick={() => addCheese(cheese)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ cheese }</span>
            </motion.li>
          )
        })}
      </ul>

      <div className="divider">
        <span>
          {sub.cheese ?
            `${t('selected')}: ${sub.cheese}` :
            `* ${t('required')}`
          }
        </span>
      </div>

      <NavigateButtons
        prevRoute='/bread'
        nextRoute='/roast'
        condition={sub.cheese}
      />

    </motion.div>
  );
}

export default Cheese;