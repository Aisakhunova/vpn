import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = t("faq.faqs", { returnObjects: true }); // Получаем массив объектов вопросов и ответов

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">{t("faq.title")}</h2>
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="divider"></div>
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <div className="faqq">{item.question}</div>
              <span className="faq-icon">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.0001 0H14.0001V25H11.0001V0Z" fill="#17FFB2" />
                  <path d="M25 11.0001V14.0001L0 14.0001L1.31134e-07 11.0001L25 11.0001Z" fill="#17FFB2" />
                </svg>
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
