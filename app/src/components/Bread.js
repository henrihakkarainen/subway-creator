import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavigateButtons from './NavigateButtons';

import { containerVariants, listVariants } from './motion-variants';

const Bread = ({ addBread, sub }) => {
  const [ t ] = useTranslation();

  const breads = Object.values(
      t('breads', { returnObjects: true }) // Return list from translations
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

      <h3>{t('steps.2')} {!sub.bread ? '*' : ''}</h3>
      <ul>
        {breads.map(bread => {
          let spanClass = sub.bread === bread ? 'active' : '';
          return (
            <motion.li
              key={bread}
              onClick={() => addBread(bread)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ bread }</span>
            </motion.li>
          )
        })}
      </ul>

      <div className="divider">
        <span>
          {sub.bread ?
            `${t('selected')}: ${sub.bread}` :
            `* ${t('required')}`
          }
        </span>
      </div>

      <NavigateButtons
        prevRoute='/sub'
        nextRoute='/cheese'
        condition={sub.bread}
      />

    </motion.div>
  )
}

export default Bread;