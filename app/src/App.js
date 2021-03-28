import { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Language from './components/Language';
import Bread from './components/Bread';
import Cheese from './components/Cheese';
import Confirm from './components/Confirm';
import Extras from './components/Extras';
import Filling from './components/Filling';
import Roast from './components/Roast';
import Sauces from './components/Sauces';
import Spices from './components/Spices';
import Veggies from './components/Veggies';
import NotFound from './components/NotFound';

function App() {
  const [sub, setSub] = useState({
    filling: '',
    bread: '',
    cheese: '',
    roast: true,
    extras: [],
    sauces: [],
    spices: [],
    veggies: []
  });
  const [ showModal, setShowModal ] = useState(false);
  const [ t, i18n ] = useTranslation();

  const history = useHistory();
  const location = useLocation();

  /* Relocate to home page if any page is refreshed
     because applied selections will be lost. */
  useEffect(() => {
    if (!sub.filling) {
      history.push('/');
    }
  }, [sub.filling, history])

  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang !== 'en' && lang !== 'fi') {
      localStorage.setItem('lang', 'en');
    }
  }, []);

  const onChangeLanguage = (lang) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    setShowModal(false);
  }

  const addFilling = (filling) => {
    setSub({ ...sub, filling });
  }

  const addBread = (bread) => {
    setSub({ ...sub, bread });
  }

  const addCheese = (cheese) => {
    // If Double Cheese extra is selected and user returns to select
    // No cheese, then Double Cheese extra is removed.
    let newExtras = sub.extras;
    if (cheese === t('cheeses.no') && sub.extras.includes(t('extras.dc'))) {
      newExtras = sub.extras.filter(item => item !== t('extras.dc'));
    }
    setSub({ ...sub, cheese, extras: newExtras });
  }

  const setRoast = (roast) => {
    setSub({ ...sub, roast });
  }

  const addExtra = (extra) => {
    let newExtras;
    if (!sub.extras.includes(extra)) {
      newExtras = [ ...sub.extras, extra ];
    } else {
      newExtras = sub.extras.filter(item => item !== extra);
    }
    setSub({ ...sub, extras: newExtras })
  }
  
  const addVegetable = (vegetable) => {
    if (vegetable === t('veggies.no') && !sub.veggies.includes(vegetable)) {
      setSub({ ...sub, veggies: [ vegetable ] });
    } else {
      let newVeggies;
      if (!sub.veggies.includes(vegetable)) {
        newVeggies = [ ...sub.veggies, vegetable ];
      } else {
        newVeggies = sub.veggies.filter(item => item !== vegetable);
      }
      newVeggies = newVeggies.filter(item => item !== t('veggies.no'));
      setSub({ ...sub, veggies: newVeggies });
    }    
  }

  const addSauce = (sauce) => {
    if (sauce === t('sauces.no') && !sub.sauces.includes(sauce)) {
      setSub({ ...sub, sauces: [ sauce ] });
    } else {
      let newSauces;
      if (!sub.sauces.includes(sauce) && sub.sauces.length < 2) {
        newSauces = [ ...sub.sauces, sauce ];
      } else {
        newSauces = sub.sauces.filter(item => item !== sauce);
      }
      newSauces = newSauces.filter(item => item !== t('sauces.no'));
      setSub({ ...sub, sauces: newSauces });
    }    
  }

  const addSpice = (spice) => {
    let newSpices;
    if (!sub.spices.includes(spice)) {
      newSpices = [ ...sub.spices, spice ];
    } else {
      newSpices = sub.spices.filter(item => item !== spice);
    }
    setSub({ ...sub, spices: newSpices });
  }

  const reset = () => {
    setSub({
      filling: '',
      bread: '',
      cheese: '',
      roast: true,
      extras: [],
      sauces: [],
      spices: [],
      veggies: []
    });
  }

  return (
    <>
      <Header />
      <Language
        showModal={showModal}
        closeModal={setShowModal}
        changeLanguage={onChangeLanguage} />
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home reset={reset} openModal={setShowModal} />
          </Route>
          <Route exact path="/sub">
            <Filling addFilling={addFilling} sub={sub} />
          </Route>
          <Route exact path="/bread">
            <Bread addBread={addBread} sub={sub} />
          </Route>
          <Route exact path="/cheese">
            <Cheese addCheese={addCheese} sub={sub} />
          </Route>
          <Route exact path="/roast">
            <Roast setRoast={setRoast} sub={sub} />
          </Route>
          <Route exact path="/extras">
            <Extras addExtra={addExtra} sub={sub} />
          </Route>
          <Route exact path="/veggies">
            <Veggies addVegetable={addVegetable} sub={sub} />
          </Route>
          <Route exact path="/sauces">
            <Sauces addSauce={addSauce} sub={sub} />
          </Route>
          <Route exact path="/spices">
            <Spices addSpice={addSpice} sub={sub} />
          </Route>
          <Route exact path="/confirm">
            <Confirm sub={sub} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;