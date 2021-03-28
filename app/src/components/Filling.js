import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavigateButtons from './NavigateButtons';

import { containerVariants, listVariants } from './motion-variants';

const Filling = ({ addFilling, sub }) => {
  const [ t ] = useTranslation();

  const fillings = Object.values(
      t('fillings', { returnObjects: true }) // Return list from translations
    )
    .sort(); // Sort from A->Z

  return (
    <motion.div
      className="sub container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      
      <h3>{t('steps.1')} {!sub.filling ? '*' : ''}</h3>
      <ul>
        {fillings.map(item => {
          let spanClass = sub.filling === item ? 'active' : '';
          return (
            <motion.li
              key={item}
              onClick={() => addFilling(item)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ item }</span>
            </motion.li>
          );
        })}
      </ul>
      <div className="divider">
        <span>
          {sub.filling ?
            `${t('selected')}: ${sub.filling}` :
            `* ${t('required')}`
          }
        </span>
      </div>

      <NavigateButtons
        nextRoute='/bread'
        condition={sub.filling}
      />
    </motion.div>
  )
}

export default Filling;