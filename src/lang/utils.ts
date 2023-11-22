import { atom } from "nanostores";

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
    en: {
        "nav.home": "HOME",
        "nav.about": "ABOUT",
        "nav.blog": "BLOG",
        "main.description":
            "I'm a frontend developer, passionate about creating beautiful and performant websites. I'm always searching for new and exciting projects to work on. ",
    },
    es: {
        "nav.home": "INICIO",
        "nav.about": "SOBRE MI",
        "nav.blog": "BLOG",
        "main.description":
            "Soy un desarrollador frontend, apasionado por crear sitios web increíbles y eficientes. Estoy siempre buscando nuevos y extraídos proyectos para trabajar en.",
    },
} as const;

export const getTranslation: (key: string, language?: Language) => string = (
    key: string,
    language: Language = $selectedLanguage.get()
) => {
    return ui[language][key];
};
