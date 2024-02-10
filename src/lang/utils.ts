import esJSON from "./es.json";
import enJSON from "./en.json";
import { getRelativeLocaleUrl } from "astro:i18n";

const ui = {
    es: esJSON,
    en: enJSON,
};

const defaultLang = "es";

export type Language = keyof typeof ui;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function translateUrl(url: URL, lang: keyof typeof ui) {
    const [rest, path] = url.pathname.split("/");
    console.log({ url, rest, path });

    let res = getRelativeLocaleUrl(lang) + path;
    console.log({ res });
    return res;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export const getLocaleUrl = (
    locale: Language,
    path: string,
    isRelative: boolean = false
) => {
    let url = getRelativeLocaleUrl(locale);

    if (isRelative) {
        url = url.slice(0, -1) + "#";
    }

    return url + path;
};
