import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export const Curtain = () => {
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
      className="container"
      ref={ref} 
      whileHover="hover"
      id="curtain"
    >
      <motion.div
        className="outer-container"
        whileHover="hover"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        
        <motion.div
  className="flash"
  initial={!isMobile ? { opacity: 0 } : null}
  animate={!isMobile && inView ? "hover" : null}
  variants={!isMobile ? {
    hover: {
      opacity: [0, 1, 1],
      scale: [1, 1.5, 1],
    },
  } : null}
  transition={!isMobile ? {
    duration: 0.3,
    ease: "easeInOut",
  } : null}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle, white, transparent)",
    zIndex: -1,
    pointerEvents: "none",
  }}
></motion.div>

<motion.h1
  className="main-text"
  animate={!isMobile && inView ? "hover" : null}
  variants={!isMobile ? {
    hover: {
      y: 300,
      opacity: 1,
    },
  } : null}
  transition={!isMobile ? { duration: 0.3, delay: 0.1 } : null}
>
  <div className="choose-green">{t("curtain.ready")}</div>
</motion.h1>

<motion.div
  className="inner-container"
  initial={!isMobile ? { opacity: 0, y: -500 } : null}
  animate={!isMobile && inView ? "hover" : null}
  variants={!isMobile ? {
    hover: {
      y: 0,
      opacity: 1,
    },
  } : null}
  transition={!isMobile ? { duration: 0.3 } : null}
>
  <a 
    href="https://t.me/exeslam"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p className="curtain-text">{t("curtain.iamready")}</p>
  </a>
  
  <motion.div
    initial={!isMobile ? { opacity: 0, x: -100 } : null}
    animate={!isMobile && inView ? "hover" : null}
    variants={!isMobile ? {
      hover: {
        x: 0,
        opacity: 1,
      },
    } : null}
    transition={!isMobile ? { duration: 0.5 } : null}
  >
    <svg
      width="49"
      height="38"
      viewBox="0 0 49 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-icon"
    >
      <path
        d="M47.7675 17.2322C48.7438 18.2085 48.7438 19.7915 47.7675 20.7678L31.8576 36.6777C30.8813 37.654 29.2984 37.654 28.3221 36.6777C27.3458 35.7014 27.3458 34.1184 28.3221 33.1421L42.4642 19L28.3221 4.85786C27.3458 3.88155 27.3458 2.29864 28.3221 1.32233C29.2984 0.34602 30.8813 0.34602 31.8576 1.32233L47.7675 17.2322ZM2.99976 21.5C1.61905 21.5 0.499756 20.3807 0.499756 19C0.499756 17.6193 1.61905 16.5 2.99976 16.5V21.5ZM45.9998 21.5H2.99976V16.5H45.9998V21.5Z"
        fill="#1C1C1C"
      />
    </svg>
  </motion.div>
</motion.div>

      </motion.div>
    </motion.div>
  );
};
