import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <Link to="/">
          <h1>Subway Creator</h1>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header;