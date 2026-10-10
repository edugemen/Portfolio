import esJSON from "./es.json";
import enJSON from "./en.json";

export const languages = {
    es: {
        name: "Español",
        flag: "🇪🇸",
    },
    en: {
        name: "English (US)",
        flag: "🇺🇸",
    },
};

export type Language = keyof typeof languages;

export const defaultLang: Language = "es";

const ui: Record<Language, Record<string, string>> = {
    en: enJSON,
    es: esJSON,
} as const;

export const getLangFromUrl = (url: URL): Language => {
    const [, first] = url.pathname.split("/");
    return first in languages ? (first as Language) : defaultLang;
};

export const getTranslation = (key: string, language: Language = defaultLang) =>
    ui[language][key];

/** Path of `path` (without language prefix) in the given language. */
export const localizedPath = (path: string, language: Language) =>
    language === defaultLang ? path : `/${language}${path === "/" ? "" : path}`;

/** Strips the language prefix and trailing slash from a pathname. */
export const stripLang = (pathname: string) =>
    pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/+$/, "") || "/";
