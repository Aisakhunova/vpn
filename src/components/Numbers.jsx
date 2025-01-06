import React from "react";
import { useTranslation } from "react-i18next";
export const Numbers = () => {
    const { t } = useTranslation();
    return (
        <div>
           <div className="choose-title"><span className="choose-green">{t("whyUs.whyChooseUs1")}</span> {t("whyUs.whyChooseUs2")}</div>

            <div id="numbers">
            <img className="line line-left" src="img/left.svg"  />
            <div className="circle">
                <img className="num" src="img/300k.svg"  />
                <div className="text">{t("whyUs.trust")}</div>
            </div>
            <img className="icon" src="img/nums-icon.svg"  />
            <div className="circle">
            <img className="num" src="img/40m.svg"  />
            <div className="text">{t("whyUs.giga")}</div>
            </div>
            <img className="line" src="img/right.svg"  />
        </div>
        </div>
    )
}