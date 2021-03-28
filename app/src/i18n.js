import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './locate/en/default.json';
import FI from './locate/fi/default.json';

const languages = [ 'en', 'fi' ];

const language = localStorage.getItem('lang');

i18n
.use(initReactI18next)
.init({
  resources: {
    en: EN,
    fi: FI
  },
  lng: languages.includes(language) ? language : 'en',
  fallbackLng: 'en',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  },
  react: {
    wait: true,
    bindI18n: 'languageChanged loaded',
    bindI18nStore: 'added removed',
    nsMode: 'default'
  }
});

export default i18n;