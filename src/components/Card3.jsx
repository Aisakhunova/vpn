import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const Card3 = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false); 
  const [inView, setInView] = useState(false);

  const { ref, inView: isInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true); 
    } else {
      setIsMobile(false); 
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      setInView(true);
    }
  }, [isInView]);

  return (
    <motion.div
      className="card3"
      ref={ref} 
      whileHover="hover"
    >
      <div style={styles.title} className="card-mob">
        {t("whyUs.blazing1")}
        <div className="choose-green">{t("whyUs.blazing2")}</div>
        {t("whyUs.blazing3")}
      </div>

      <motion.div
        variants={{
          hover: {
            x: 0,
            y: 0,
          },
        }}
        initial={{ x: 400, y: -500 }}
        animate={isMobile && inView ? "hover" : {}}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 20,    
        }}
        style={styles.vectorWrapper}
      >
        <img src="img/lightning.svg" alt="" style={styles.vector} />
      </motion.div>

      <motion.div
        variants={{
          hover: {
            x: 0,
          },
        }}
        initial={{ x: 700 }}
        animate={isMobile && inView ? "hover" : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="card3-text">
          {t("whyUs.stream1")}
          <br />
          {t("whyUs.stream2")}
          <br />
          {t("whyUs.stream3")}
        </div>
      </motion.div>

      <a
        className="card-btn"
        href="https://t.me/exeslam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-icon2"
        >
          <path
            d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928931C10.9526 0.538407 10.3195 0.538407 9.92893 0.928931C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"
            fill="white"
          />
        </svg>
        <div style={styles.btnText}>{t("header.getAccess")}</div>
      </a>
    </motion.div>
  );
};

const styles = {
  vectorWrapper: {
    position: "absolute",
    width: "70%",
    height: "105%",
    top: "-2%",
    left: "40%",
  },
  vector: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: "clamp(34px, 5vw, 60px)",
    fontFamily: "Raleway",
    fontWeight: "500",
    lineHeight: "1.2",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "35px",
  },
  btn: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 8px", // Небольшие отступы вокруг текста
    background: "rgba(0, 0, 0, 0.5)", // Тёмный полупрозрачный фон
    borderRadius: "4px", // Лёгкое закругление для плавности
    color: "white",
    fontSize: "clamp(14px, 2vw, 18px)", // Динамичный размер текста
    lineHeight: "1.2",
  },
  btnText: {
    fontFamily: "'Raleway'",
    fontSize: "clamp(14px, 2vw, 20px)",
    lineHeight: "20px",
    marginLeft: "10px",
  },
};

export default Card3;
