import { atom } from "nanostores";
import esJSON from "./es.json";
import enJSON from "./en.json";

export const languages = {
    es: {
        name: "Espanol",
        flag: "🇪🇸",
    },
    en: {
        name: "English (US)",
        flag: "🇺🇸",
    },
};

export type Language = keyof typeof languages;

export const $selectedLanguage = atom<Language>("es");

const ui: Record<Language, Record<string, string>> = {
    en: enJSON,
    es: esJSON,
} as const;

export const getTranslation: (key: string, language?: Language) => string = (
    key: string,
    language: Language = $selectedLanguage.get()
) => {
    return ui[language][key];
};
