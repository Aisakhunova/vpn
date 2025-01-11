import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), 
    customPaging: (i) => (
      <div
        style={{
          opacity: i === currentSlide ? "100%" : "20%", 
          backgroundColor: "white",
          borderRadius: "50%", 
          width: "10px",
          height: "10px", 
          margin: "0 5px",  
          cursor: "pointer", 
        }}
      ></div>
    ),
  };

  return (
    <motion.section
      id="whyUs"
      className="whyUs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {isMobile ? (
        <Slider {...sliderSettings} className="mTop">
          <div className="slider-card">
            <Card1 />
          </div>
          <div className="slider-card">
            <Card2 />
          </div>
          <div className="slider-card">
            <Card3 />
          </div>
          <div className="slider-card">
            <Card4 />
          </div>
        </Slider>
      ) : (
        <div className="cards">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      )}
    </motion.section>
  );
};

export default WhyUs;
