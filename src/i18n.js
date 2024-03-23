import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import ru from "../public/locales/ru";
import uz from "../public/locales/uz";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lang: "uz",
    debug: true,
    resources: {
      ru: { translation: ru },
      uz: { translation: uz },
    },
    lang: localStorage.getItem("lang") || "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
