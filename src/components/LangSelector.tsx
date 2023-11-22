import React from "react";
import { useStore } from "@nanostores/react";
import { languages, $selectedLanguage } from "../lang/utils";
import "./styles.css";

function LangSelector(props: any) {
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
            {languages[selectedLanguage].flag}
        </button>
    );
}

export default LangSelector;
