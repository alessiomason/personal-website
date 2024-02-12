import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {homeIt, homeEn} from "./homeLocalizations";
import {secretPageIt, secretPageEn} from "./secretPageLocalizations";
import {maintenancePageIt, maintenancePageEn} from "./maintenancePageLocalizations";
import {flashwordIt, flashwordEn} from "./apps/flashwordLocalizations";

const resources = {
    it: {
        translation: {
            ...homeIt,
            ...secretPageIt,
            ...maintenancePageIt,
            ...flashwordIt
        }
    },
    en: {
        translation: {
            ...homeEn,
            ...secretPageEn,
            ...maintenancePageEn,
            ...flashwordEn
        }
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