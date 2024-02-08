import { useStore } from "@nanostores/react";
import { languages, $selectedLanguage } from "../lang/utils";
import { ES, GB } from "country-flag-icons/react/3x2";
import "./styles.css";

function LangSelector() {
    const selectedLanguage = useStore($selectedLanguage);

    const toggleLang = () => {
        console.log(selectedLanguage);
        if (selectedLanguage === "en") {
            $selectedLanguage.set("es");
        } else {
            $selectedLanguage.set("en");
        }
    };

    return (
        <button className="lang-selector" onClick={toggleLang}>
            {/* {languages[selectedLanguage].flag} */}
            {selectedLanguage === "en" ? <GB /> : <ES />}
        </button>
    );
}

export default LangSelector;
