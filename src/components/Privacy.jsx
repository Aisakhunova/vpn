import React from "react";
import { useTranslation } from "react-i18next";
export const Privacy = () => {
    const { t } = useTranslation();
    return (
        <div id="privacy">
            <div className="privacy-title">{t("privacy.yourRules")}</div>
            <div className="privacy-text green-back">{t("privacy.noTrack")}</div>
            <button className='header-btn privacy-button'>{t("header.getAccess")}</button>
        </div>
    )
}