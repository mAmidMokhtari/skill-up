import i18n from "i18next";
import Backend from "i18next-http-backend";
import translationEN from "locales/en/translation.json";
import translationFA from "locales/fa/translation.json";
import { initReactI18next } from "react-i18next";

const language = window.localStorage.getItem("language");

const resources = {
  fa: {
    translation: translationFA,
  },
  en: {
    translation: translationEN,
  },
};
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: language || "en",
  });

export default i18n;
