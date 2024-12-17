import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./assets/locale/en/translation.json";
import translationHI from "./assets/locale/hi/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
