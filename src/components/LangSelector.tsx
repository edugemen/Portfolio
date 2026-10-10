import { useStore } from "@nanostores/react";
import { languages, $selectedLanguage } from "../lang/utils";
import { ES, GB } from "country-flag-icons/react/3x2";
import "./styles.css";

function LangSelector() {
    const selectedLanguage = useStore($selectedLanguage);

    const toggleLang = () => {
        if (selectedLanguage === "en") {
            $selectedLanguage.set("es");
        } else {
            $selectedLanguage.set("en");
        }
    };

    return (
        <button
            type="button"
            className="lang-selector"
            onClick={toggleLang}
            aria-label={
                selectedLanguage === "en"
                    ? "Language: English. Switch to Spanish"
                    : "Idioma: Español. Cambiar a inglés"
            }
        >
            {/* {languages[selectedLanguage].flag} */}
            {selectedLanguage === "en" ? <GB aria-hidden="true" /> : <ES aria-hidden="true" />}
        </button>
    );
}

export default LangSelector;
