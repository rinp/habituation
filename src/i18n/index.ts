import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "ようこそ React と react-i18next へ。":
          "Welcome to React and react-i18next.",
        言語を切り替え: "change language",
      },
    },
    ja: {
      translation: {
        "ようこそ React と react-i18next へ。":
          "ようこそ React と react-i18next へ。",
        言語を切り替え: "言語を切り替え",
      },
    },
  },
  lng: "ja",
  fallbackLng: "ja",
  interpolation: { escapeValue: false },
});
