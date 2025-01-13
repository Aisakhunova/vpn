import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const Card1 = () => {
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
      whileHover="hover"
      className="card1"
      ref={ref}
    >
      <div style={styles.title}>{t("whyUs.global")}</div>
      <motion.div
        variants={{
          hover: {
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0,
          },
        }}
        initial={{ 
          rotate: 60, 
          x: 95, y: 60, 
          scale: 0.8 
        }}
        animate={isMobile && inView ? "hover" : {}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        style={styles.vectorWrapper}
      >
        <img src="img/planet.svg" alt="" style={styles.vector} />
      </motion.div>
      
      <motion.div
  variants={{
    hover: {
      x: 0,
      y: "0",
      rotate: -8,
    },
  }}
  initial={{
    x: -400,
    y: "150%",
    rotate: 45,
  }}
  animate={isMobile && inView ? "hover" : {}}
  transition={{
    duration: 0.5,
    ease: "easeInOut",
  }}
  style={styles.cloud}
>
  {/* SVG-картинка облака */}
  <img src="img/bubble2.svg" alt="cloud" style={styles.cloudVector} />

  {/* Текст поверх SVG */}
  <div style={styles.cloudText}>
    <p className="bubble-text">{t("whyUs.cloudText")}</p>
  </div>
</motion.div>
      {/* <motion.div
        variants={{
          hover: {
            x: 0,
            y: "0",
            rotate: 0,
          },
        }}
        initial={{ 
          x: -400, 
          y: "150%", 
          rotate: 45 
        }}
        animate={isMobile && inView ? "hover" : {}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        style={styles.cloud}
      >
        <div style={styles.cloudVector}>Hola cepasa</div>
      </motion.div> */}
      <a    
        href="https://t.me/exeslam"
        target="_blank"
        rel="noopener noreferrer"
        className="card-btn"
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
    width: "110%",
    height: "110%",
    top: "35%",
    left: "-5%",
  },
  vector: {
    width: "100%",
    height: "auto",
  },
  cloud: {
    position: "absolute",
    top: "42%",
    left: "5%",
    width: "50%",
    display: "flex", // Используем flex для центрирования
    justifyContent: "center",
    alignItems: "center",
  },
  cloudVector: {
    width: "100%",
    height: "auto",
    position: "absolute", // Чтобы текст был над SVG
    zIndex: 1,
  },
  cloudText: {
    position: "relative", // Текст поверх облака
    fontSize: "clamp(16px, 3vw, 24px)",
    fontWeight: "500",
    textAlign: "center",
    color: "white", // Цвет текста
    zIndex: 10, // Чтобы текст был над SVG
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: "clamp(34px, 6vw, 60px)",
    // fontSize: "clamp(14px, 5vw, 60px)",
    fontWeight: "500",
    lineHeight: "1.2",
    position: "absolute",
    top: "10%",
    left: "5%",
    maxWidth: "90%",
  },
  btn: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 8px", 
    background: "rgba(0, 0, 0, 0.5)", 
    borderRadius: "4px", 
    color: "white",
    fontSize: "clamp(14px, 2vw, 18px)", 
    lineHeight: "1.2",
  },
  btnText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: "clamp(5px, 3vw, 20px)",
    // fontSize: "clamp(8px, 2vw, 20px)",
    lineHeight: "1.2",
    marginLeft: "10px",
    zIndex: "200 !important",
  }
};

export default Card1;
