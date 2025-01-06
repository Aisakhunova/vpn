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
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Проверка ширины экрана и установка состояния isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Слайдер будет отображаться на экранах шириной 768px и меньше
    };
    handleResize(); // Вызовем один раз для начальной проверки
    window.addEventListener("resize", handleResize); // Слушаем изменение размера окна
    return () => window.removeEventListener("resize", handleResize); // Убираем слушателя при размонтировании
  }, []);

  // Конфигурация слайдера
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          backgroundColor: "white", // Белые точки
          borderRadius: "50%", // Сделаем точки круглыми
          width: "10px", // Размер точки
          height: "10px", // Размер точки
          margin: "0 5px", // Расстояние между точками
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
        <Slider {...sliderSettings}>
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
