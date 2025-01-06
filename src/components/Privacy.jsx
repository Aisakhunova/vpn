import React from "react";
import { useTranslation } from "react-i18next";
export const Privacy = () => {
    const { t } = useTranslation();
    return (
        <div id="privacy">
            <div className="privacy-title">
                <div>{t("privacy.yourRules")}</div>
                <div>{t("privacy.yourRules2")}</div>
            </div>
            <div className="privacy-text green-back">
                {t("privacy.noTrack")}
            </div>
            <a 
                className='header-btn privacy-button' 
                href="https://t.me/exeslam"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t("header.getAccess")}
            </a>
        </div>
    )
}