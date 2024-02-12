import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {homeIt, homeEn} from "./homeLocalizations";

const resources = {
    it: {
        ...homeIt
    },
    en: {
        ...homeEn
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(I18nextBrowserLanguageDetector)
    .init({
        resources,
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        fallbackLng: {
            default: ["en"]
        }
    });