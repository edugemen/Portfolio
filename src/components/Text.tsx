import { useStore } from "@nanostores/react";
import React, { useEffect, useMemo } from "react";
import { $selectedLanguage, getTranslation } from "../lang/utils";

interface TextProps {
    id: string;
    type: string;
    className?: string;
}

function Text(props: TextProps) {
    const { id, type, className } = props;
    const lang = useStore($selectedLanguage);
    const text = useMemo(() => {
        if (lang) {
            return getTranslation(id, lang);
        }
    }, [lang]);

    if (type === "h1") {
        return <h1 className={className}>{text}</h1>;
    } else if (type === "h2") {
        return <h2 className={className}>{text}</h2>;
    } else if (type === "h3") {
        return <h3 className={className}>{text}</h3>;
    } else if (type === "p") {
        return <p className={className}>{text}</p>;
    }
}

export default Text;
