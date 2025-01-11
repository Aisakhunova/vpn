import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export const Card2 = () => {
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
            className="card2"
            ref={ref} 
            whileHover="hover"
        >
            <motion.div
                variants={{
                    hover: {
                        y: 0,
                    },
                }}
                initial={{ y: -300 }}
                animate={isMobile && inView ? "hover" : {}}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <div className="card-pale-text">
                    {t("whyUs.using1")}
                    {t("whyUs.using2")}
                </div>
            </motion.div>

            <motion.div
                variants={{
                    hover: {
                        y: -10,
                    },
                }}
                animate={isMobile && inView ? "hover" : {}}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <div style={styles.title}>
                    {t("whyUs.top1")}

                    <motion.div
                        className="green-back"
                        variants={{
                            hover: {
                                padding: "5px 10px",
                            },
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        {t("whyUs.top2")}
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                variants={{
                    hover: {
                        scale: 1.15,
                        y: 90,
                    },
                }}
                initial={{ y: 100 }}
                animate={isMobile && inView ? "hover" : {}}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="shieldWrapper"
            >
                <img src="img/shield.svg" alt="" className={styles.vector} />
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
    shieldWrapper: {
        position: "absolute",
        width: "60%",
        height: "90%",
        top: "35%",
        display: "flex",
        justifyContent: "center",
    },
    vector: {
        width: "100%",
        height: "auto",
        backgroundColor: "blue",
    },
    title: {
        fontSize: "clamp(34px, 5vw, 60px)",
        fontWeight: "500",
        lineHeight: "1.2",
        textAlign: "center",
        marginBottom: "15px",
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
        fontSize: "clamp(14px, 2vw, 20px)",
        lineHeight: "1.2",
        marginLeft: "10px",
    },
};

export default Card2;
