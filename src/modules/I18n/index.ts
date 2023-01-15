import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import raw from './translations/en.json';
import esp from './translations/es.json';
import Session from '../Session';
import { SESSION_STORAGE_KEY as LanguageKey } from '../Language';

let userLanguage = Session.get(LanguageKey)?.Language ?? 'en'

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