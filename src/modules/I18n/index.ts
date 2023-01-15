import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import raw from './translations/en.json';
import esp from './translations/es.json';

let userLanguage = 'en';

if (userLanguage.slice(0, 2) === 'es') userLanguage = 'es';

const resources = {
  en: raw,
  es: esp,
};

i18n.use(initReactI18next).init({
  resources,
  lng: `${userLanguage}`,
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;