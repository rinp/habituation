import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { jaTrans } from "./ja";
import { enTrans } from "./en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTrans,
    },
    ja: {
      translation: jaTrans,
    },
  },
  lng: "ja",
  fallbackLng: "ja",
  interpolation: { escapeValue: false },
});
