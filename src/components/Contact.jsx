import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Смена языка
  };

  return (
    <div id="footer">
     <section>
     <div className="footer-content">
     <div className="footer-left">
     <img className="num" src="img/logo3.svg"  />
        <div className="text-gray footer-rights">
          <div>{t("footer.rights")} </div>
          <div>©2024</div>
        </div>
      </div>
      <div className="footer-right">
        <div className="foot-left">
          <a className="footer-text" href="#whyUs">{t("footer.why")}</a>
          <a className="footer-text" href="#steps">{t("footer.steps")}</a>
          <a className="footer-text" href="#faq">{t("footer.faq")}</a>
          <div className="footer-text">{t("footer.join")}</div>
        </div>
        <div className="foot-right">
          <div className="footer-text language-container">
            <div className="language-select-wrapper">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0.6875C6.55373 0.6875 5.13993 1.11637 3.9374 1.91988C2.73486 2.72339 1.7976 3.86544 1.24413 5.20163C0.690668 6.53781 0.545857 8.00811 0.828011 9.4266C1.11017 10.8451 1.80661 12.148 2.82928 13.1707C3.85196 14.1934 5.15492 14.8898 6.57341 15.172C7.99189 15.4541 9.46219 15.3093 10.7984 14.7559C12.1346 14.2024 13.2766 13.2651 14.0801 12.0626C14.8836 10.8601 15.3125 9.44628 15.3125 8C15.3105 6.06123 14.5394 4.20246 13.1685 2.83154C11.7975 1.46063 9.93877 0.689547 8 0.6875ZM14.1615 7.4375H11.3609C11.2618 5.43641 10.6388 3.53727 9.59469 2.02344C10.8176 2.35175 11.9107 3.04652 12.727 4.01437C13.5434 4.98222 14.044 6.17677 14.1615 7.4375ZM8 14.1798C6.68305 12.7545 5.8843 10.7345 5.76618 8.5625H10.2338C10.1157 10.733 9.31696 12.7545 8 14.1798ZM5.76618 7.4375C5.8843 5.26695 6.68024 3.24547 8 1.82023C9.31696 3.24547 10.1157 5.26555 10.2338 7.4375H5.76618ZM6.40532 2.02344C5.36118 3.53727 4.73821 5.43641 4.63907 7.4375H1.83852C1.956 6.17677 2.45657 4.98222 3.27296 4.01437C4.08935 3.04652 5.18243 2.35175 6.40532 2.02344ZM1.83852 8.5625H4.63907C4.73821 10.5636 5.36118 12.4627 6.40532 13.9766C5.18243 13.6483 4.08935 12.9535 3.27296 11.9856C2.45657 11.0178 1.956 9.82323 1.83852 8.5625ZM9.59469 13.9766C10.6388 12.4606 11.2618 10.5615 11.3609 8.5625H14.1615C14.044 9.82323 13.5434 11.0178 12.727 11.9856C11.9107 12.9535 10.8176 13.6483 9.59469 13.9766Z" fill="#D5D5D5"/>
</svg>
              <select
                className="language-select"
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="zh">中文</option>
                <option value="fa">فارسی</option>
              </select>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.31006 4.5L6.31006 8.5L10.3101 4.5" stroke="#D5D5D5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </div>
          </div>
          <div className="footer-text text-gray2">{t("footer.terms")}</div>
          <div className="footer-text text-gray2">{t("footer.privacy")}</div>
          <div className="footer-text text-gray2">{t("footer.refund")}</div>
        </div>
      </div>
     </div>
     </section>
    </div>
  );
};

export default Contact;
