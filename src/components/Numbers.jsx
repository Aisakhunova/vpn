import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Numbers = () => {
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
            position: "block"
        }}
        ></div>
    ),
    };
    
    return (
        <div>
            <div className="choose-title"><span className="choose-green">{t("whyUs.whyChooseUs1")}</span> {t("whyUs.whyChooseUs2")}</div>

{isMobile ? (
        // <Slider {...sliderSettings}>
        <section className="cards">
         
         
          <div className="circle">
                    <svg className="num" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.86 160.54C62.02 160.54 60.3 160.32 58.7 159.88C57.14 159.44 55.74 158.82 54.5 158.02C53.26 157.18 52.22 156.18 51.38 155.02C50.58 153.86 50.04 152.56 49.76 151.12L52.76 147.94C52.84 148.82 53.16 149.72 53.72 150.64C54.28 151.56 55.02 152.4 55.94 153.16C56.9 153.88 58.04 154.48 59.36 154.96C60.68 155.4 62.16 155.62 63.8 155.62C65.16 155.62 66.44 155.44 67.64 155.08C68.84 154.72 69.88 154.22 70.76 153.58C71.68 152.94 72.38 152.16 72.86 151.24C73.38 150.32 73.64 149.3 73.64 148.18C73.64 145.7 72.46 143.8 70.1 142.48C67.74 141.12 64.5 140.44 60.38 140.44H58.34V135.94H60.38C64.1 135.94 67.04 135.36 69.2 134.2C71.4 133.04 72.5 131.26 72.5 128.86C72.5 127.74 72.26 126.72 71.78 125.8C71.3 124.88 70.64 124.12 69.8 123.52C69 122.88 68.06 122.4 66.98 122.08C65.94 121.72 64.86 121.54 63.74 121.54C62.46 121.54 61.26 121.7 60.14 122.02C59.06 122.3 58.08 122.7 57.2 123.22C56.32 123.74 55.56 124.36 54.92 125.08C54.32 125.76 53.84 126.48 53.48 127.24L49.94 123.58C50.54 122.54 51.32 121.6 52.28 120.76C53.28 119.92 54.38 119.22 55.58 118.66C56.78 118.06 58.06 117.62 59.42 117.34C60.82 117.02 62.24 116.86 63.68 116.86C65.76 116.86 67.68 117.16 69.44 117.76C71.2 118.36 72.72 119.2 74 120.28C75.28 121.32 76.28 122.56 77 124C77.72 125.4 78.08 126.94 78.08 128.62C78.08 131.06 77.36 133.08 75.92 134.68C74.48 136.24 72.44 137.34 69.8 137.98C71.2 138.22 72.46 138.68 73.58 139.36C74.74 140.04 75.72 140.86 76.52 141.82C77.36 142.78 78 143.86 78.44 145.06C78.88 146.26 79.1 147.52 79.1 148.84C79.1 150.72 78.68 152.38 77.84 153.82C77 155.26 75.88 156.48 74.48 157.48C73.08 158.48 71.46 159.24 69.62 159.76C67.78 160.28 65.86 160.54 63.86 160.54ZM102.798 160.6C99.8377 160.56 97.2377 159.86 94.9977 158.5C92.7977 157.14 90.9377 155.42 89.4177 153.34C87.9377 151.22 86.8177 148.9 86.0577 146.38C85.2977 143.86 84.9177 141.4 84.9177 139C84.9177 136.44 85.3177 133.88 86.1177 131.32C86.9577 128.72 88.1577 126.4 89.7177 124.36C91.2777 122.28 93.1577 120.6 95.3577 119.32C97.5577 118.04 100.038 117.4 102.798 117.4C105.758 117.4 108.338 118.1 110.538 119.5C112.778 120.86 114.638 122.6 116.118 124.72C117.638 126.84 118.778 129.18 119.538 131.74C120.298 134.26 120.678 136.68 120.678 139C120.678 141.6 120.258 144.18 119.418 146.74C118.618 149.3 117.438 151.6 115.878 153.64C114.318 155.68 112.438 157.34 110.238 158.62C108.038 159.9 105.558 160.56 102.798 160.6ZM90.3777 139C90.4177 140.96 90.6977 142.94 91.2177 144.94C91.7777 146.9 92.5777 148.68 93.6177 150.28C94.6577 151.88 95.9377 153.2 97.4577 154.24C98.9777 155.24 100.758 155.74 102.798 155.74C104.918 155.74 106.758 155.2 108.318 154.12C109.878 153.04 111.158 151.68 112.158 150.04C113.198 148.4 113.958 146.6 114.438 144.64C114.958 142.64 115.218 140.76 115.218 139C115.218 137.04 114.938 135.08 114.378 133.12C113.818 131.12 113.018 129.32 111.978 127.72C110.938 126.12 109.638 124.82 108.078 123.82C106.518 122.78 104.758 122.26 102.798 122.26C100.678 122.26 98.8377 122.8 97.2777 123.88C95.7177 124.96 94.4177 126.34 93.3777 128.02C92.3777 129.66 91.6177 131.46 91.0977 133.42C90.6177 135.38 90.3777 137.24 90.3777 139ZM144.223 160.6C141.263 160.56 138.663 159.86 136.423 158.5C134.223 157.14 132.363 155.42 130.843 153.34C129.363 151.22 128.243 148.9 127.483 146.38C126.723 143.86 126.343 141.4 126.343 139C126.343 136.44 126.743 133.88 127.543 131.32C128.383 128.72 129.583 126.4 131.143 124.36C132.703 122.28 134.583 120.6 136.783 119.32C138.983 118.04 141.463 117.4 144.223 117.4C147.183 117.4 149.763 118.1 151.963 119.5C154.203 120.86 156.063 122.6 157.543 124.72C159.063 126.84 160.203 129.18 160.963 131.74C161.723 134.26 162.103 136.68 162.103 139C162.103 141.6 161.683 144.18 160.843 146.74C160.043 149.3 158.863 151.6 157.303 153.64C155.743 155.68 153.863 157.34 151.663 158.62C149.463 159.9 146.983 160.56 144.223 160.6ZM131.803 139C131.843 140.96 132.123 142.94 132.643 144.94C133.203 146.9 134.003 148.68 135.043 150.28C136.083 151.88 137.363 153.2 138.883 154.24C140.403 155.24 142.183 155.74 144.223 155.74C146.343 155.74 148.183 155.2 149.743 154.12C151.303 153.04 152.583 151.68 153.583 150.04C154.623 148.4 155.383 146.6 155.863 144.64C156.383 142.64 156.643 140.76 156.643 139C156.643 137.04 156.363 135.08 155.803 133.12C155.243 131.12 154.443 129.32 153.403 127.72C152.363 126.12 151.063 124.82 149.503 123.82C147.943 122.78 146.183 122.26 144.223 122.26C142.103 122.26 140.263 122.8 138.703 123.88C137.143 124.96 135.843 126.34 134.803 128.02C133.803 129.66 133.043 131.46 132.523 133.42C132.043 135.38 131.803 137.24 131.803 139ZM170.049 160V117.46H175.449V140.98L197.409 117.4H203.229L186.129 136.18L204.189 160H198.309L182.829 139.3L175.449 146.98V160H170.049ZM226.05 136.54V140.86H218.97V148.54H214.17V140.86H207.09V136.54H214.17V128.86H218.97V136.54H226.05Z" fill="white"/>
                        <g filter="url(#filter0_di_78_77)">
                        <circle cx="139" cy="139" r="110" stroke="url(#paint0_linear_78_77)" strokeWidth="10" shapeRendering="crispEdges"/>
                        </g>
                        <defs>
                        <filter id="filter0_di_78_77" x="0" y="0" width="278" height="278" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="12"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0883301 0 0 0 0 1 0 0 0 0 0.69611 0 0 0 0.5 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_77"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_78_77" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_78_77"/>
                        </filter>
                        <linearGradient id="paint0_linear_78_77" x1="139" y1="29" x2="139" y2="249" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#006745"/>
                        <stop offset="1" stopColor="#17FFB2"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div className="text">{t("whyUs.trust")}</div>
             
          </div>
        
          {/* <div className="card-circle"> */}
            <div className="circle">
                    <svg className="num" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M89.27 164V151.33H65.89V145.8L91.16 114.3H95.43V145.73H101.59V151.33H95.43V164H89.27ZM72.33 145.73H89.9V123.75L72.33 145.73ZM128.55 164.7C125.097 164.653 122.064 163.837 119.45 162.25C116.884 160.663 114.714 158.657 112.94 156.23C111.214 153.757 109.907 151.05 109.02 148.11C108.134 145.17 107.69 142.3 107.69 139.5C107.69 136.513 108.157 133.527 109.09 130.54C110.07 127.507 111.47 124.8 113.29 122.42C115.11 119.993 117.304 118.033 119.87 116.54C122.437 115.047 125.33 114.3 128.55 114.3C132.004 114.3 135.014 115.117 137.58 116.75C140.194 118.337 142.364 120.367 144.09 122.84C145.864 125.313 147.194 128.043 148.08 131.03C148.967 133.97 149.41 136.793 149.41 139.5C149.41 142.533 148.92 145.543 147.94 148.53C147.007 151.517 145.63 154.2 143.81 156.58C141.99 158.96 139.797 160.897 137.23 162.39C134.664 163.883 131.77 164.653 128.55 164.7ZM114.06 139.5C114.107 141.787 114.434 144.097 115.04 146.43C115.694 148.717 116.627 150.793 117.84 152.66C119.054 154.527 120.547 156.067 122.32 157.28C124.094 158.447 126.17 159.03 128.55 159.03C131.024 159.03 133.17 158.4 134.99 157.14C136.81 155.88 138.304 154.293 139.47 152.38C140.684 150.467 141.57 148.367 142.13 146.08C142.737 143.747 143.04 141.553 143.04 139.5C143.04 137.213 142.714 134.927 142.06 132.64C141.407 130.307 140.474 128.207 139.26 126.34C138.047 124.473 136.53 122.957 134.71 121.79C132.89 120.577 130.837 119.97 128.55 119.97C126.077 119.97 123.93 120.6 122.11 121.86C120.29 123.12 118.774 124.73 117.56 126.69C116.394 128.603 115.507 130.703 114.9 132.99C114.34 135.277 114.06 137.447 114.06 139.5ZM201.66 164V125.57L185.14 155.04H181.57L164.98 125.57V164H158.68V114.3H165.33L183.32 146.57L201.38 114.3H207.96V164H201.66Z" fill="white"/>
                        <g filter="url(#filter0_di_0_1)">
                        <circle cx="139" cy="139" r="110" stroke="url(#paint0_linear_0_1)" strokeWidth="10" shapeRendering="crispEdges"/>
                        </g>
                        <defs>
                        <filter id="filter0_di_0_1" x="0" y="0" width="278" height="278" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="12"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0883301 0 0 0 0 1 0 0 0 0 0.69611 0 0 0 0.5 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_1"/>
                        </filter>
                        <linearGradient id="paint0_linear_0_1" x1="139" y1="29" x2="139" y2="249" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#006745"/>
                        <stop offset="1" stopColor="#17FFB2"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div className="text">{t("whyUs.giga")}</div>
                </div>
          {/* </div> */}
        
        {/* </Slider> */}
        </section>
      ) : (
        <div id="numbers">
                <svg className="line" viewBox="0 0 311 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_di_339_255)">
                    <path d="M0 29H287" stroke="url(#paint0_linear_339_255)" strokeWidth="10"/>
                    </g>
                    <defs>
                    <filter id="filter0_di_339_255" x="-24" y="0" width="335" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="12"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0883301 0 0 0 0 1 0 0 0 0 0.69611 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_339_255"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_339_255" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_339_255"/>
                    </filter>
                    <linearGradient id="paint0_linear_339_255" x1="301.108" y1="20.0024" x2="-30.8412" y2="42.1891" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#17FFB2"/>
                    <stop offset="1" stopColor="#006745"/>
                    </linearGradient>
                    </defs>
                </svg>

                <div className="circle">
                    <svg className="num"  width="278" height="278" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.86 160.54C62.02 160.54 60.3 160.32 58.7 159.88C57.14 159.44 55.74 158.82 54.5 158.02C53.26 157.18 52.22 156.18 51.38 155.02C50.58 153.86 50.04 152.56 49.76 151.12L52.76 147.94C52.84 148.82 53.16 149.72 53.72 150.64C54.28 151.56 55.02 152.4 55.94 153.16C56.9 153.88 58.04 154.48 59.36 154.96C60.68 155.4 62.16 155.62 63.8 155.62C65.16 155.62 66.44 155.44 67.64 155.08C68.84 154.72 69.88 154.22 70.76 153.58C71.68 152.94 72.38 152.16 72.86 151.24C73.38 150.32 73.64 149.3 73.64 148.18C73.64 145.7 72.46 143.8 70.1 142.48C67.74 141.12 64.5 140.44 60.38 140.44H58.34V135.94H60.38C64.1 135.94 67.04 135.36 69.2 134.2C71.4 133.04 72.5 131.26 72.5 128.86C72.5 127.74 72.26 126.72 71.78 125.8C71.3 124.88 70.64 124.12 69.8 123.52C69 122.88 68.06 122.4 66.98 122.08C65.94 121.72 64.86 121.54 63.74 121.54C62.46 121.54 61.26 121.7 60.14 122.02C59.06 122.3 58.08 122.7 57.2 123.22C56.32 123.74 55.56 124.36 54.92 125.08C54.32 125.76 53.84 126.48 53.48 127.24L49.94 123.58C50.54 122.54 51.32 121.6 52.28 120.76C53.28 119.92 54.38 119.22 55.58 118.66C56.78 118.06 58.06 117.62 59.42 117.34C60.82 117.02 62.24 116.86 63.68 116.86C65.76 116.86 67.68 117.16 69.44 117.76C71.2 118.36 72.72 119.2 74 120.28C75.28 121.32 76.28 122.56 77 124C77.72 125.4 78.08 126.94 78.08 128.62C78.08 131.06 77.36 133.08 75.92 134.68C74.48 136.24 72.44 137.34 69.8 137.98C71.2 138.22 72.46 138.68 73.58 139.36C74.74 140.04 75.72 140.86 76.52 141.82C77.36 142.78 78 143.86 78.44 145.06C78.88 146.26 79.1 147.52 79.1 148.84C79.1 150.72 78.68 152.38 77.84 153.82C77 155.26 75.88 156.48 74.48 157.48C73.08 158.48 71.46 159.24 69.62 159.76C67.78 160.28 65.86 160.54 63.86 160.54ZM102.798 160.6C99.8377 160.56 97.2377 159.86 94.9977 158.5C92.7977 157.14 90.9377 155.42 89.4177 153.34C87.9377 151.22 86.8177 148.9 86.0577 146.38C85.2977 143.86 84.9177 141.4 84.9177 139C84.9177 136.44 85.3177 133.88 86.1177 131.32C86.9577 128.72 88.1577 126.4 89.7177 124.36C91.2777 122.28 93.1577 120.6 95.3577 119.32C97.5577 118.04 100.038 117.4 102.798 117.4C105.758 117.4 108.338 118.1 110.538 119.5C112.778 120.86 114.638 122.6 116.118 124.72C117.638 126.84 118.778 129.18 119.538 131.74C120.298 134.26 120.678 136.68 120.678 139C120.678 141.6 120.258 144.18 119.418 146.74C118.618 149.3 117.438 151.6 115.878 153.64C114.318 155.68 112.438 157.34 110.238 158.62C108.038 159.9 105.558 160.56 102.798 160.6ZM90.3777 139C90.4177 140.96 90.6977 142.94 91.2177 144.94C91.7777 146.9 92.5777 148.68 93.6177 150.28C94.6577 151.88 95.9377 153.2 97.4577 154.24C98.9777 155.24 100.758 155.74 102.798 155.74C104.918 155.74 106.758 155.2 108.318 154.12C109.878 153.04 111.158 151.68 112.158 150.04C113.198 148.4 113.958 146.6 114.438 144.64C114.958 142.64 115.218 140.76 115.218 139C115.218 137.04 114.938 135.08 114.378 133.12C113.818 131.12 113.018 129.32 111.978 127.72C110.938 126.12 109.638 124.82 108.078 123.82C106.518 122.78 104.758 122.26 102.798 122.26C100.678 122.26 98.8377 122.8 97.2777 123.88C95.7177 124.96 94.4177 126.34 93.3777 128.02C92.3777 129.66 91.6177 131.46 91.0977 133.42C90.6177 135.38 90.3777 137.24 90.3777 139ZM144.223 160.6C141.263 160.56 138.663 159.86 136.423 158.5C134.223 157.14 132.363 155.42 130.843 153.34C129.363 151.22 128.243 148.9 127.483 146.38C126.723 143.86 126.343 141.4 126.343 139C126.343 136.44 126.743 133.88 127.543 131.32C128.383 128.72 129.583 126.4 131.143 124.36C132.703 122.28 134.583 120.6 136.783 119.32C138.983 118.04 141.463 117.4 144.223 117.4C147.183 117.4 149.763 118.1 151.963 119.5C154.203 120.86 156.063 122.6 157.543 124.72C159.063 126.84 160.203 129.18 160.963 131.74C161.723 134.26 162.103 136.68 162.103 139C162.103 141.6 161.683 144.18 160.843 146.74C160.043 149.3 158.863 151.6 157.303 153.64C155.743 155.68 153.863 157.34 151.663 158.62C149.463 159.9 146.983 160.56 144.223 160.6ZM131.803 139C131.843 140.96 132.123 142.94 132.643 144.94C133.203 146.9 134.003 148.68 135.043 150.28C136.083 151.88 137.363 153.2 138.883 154.24C140.403 155.24 142.183 155.74 144.223 155.74C146.343 155.74 148.183 155.2 149.743 154.12C151.303 153.04 152.583 151.68 153.583 150.04C154.623 148.4 155.383 146.6 155.863 144.64C156.383 142.64 156.643 140.76 156.643 139C156.643 137.04 156.363 135.08 155.803 133.12C155.243 131.12 154.443 129.32 153.403 127.72C152.363 126.12 151.063 124.82 149.503 123.82C147.943 122.78 146.183 122.26 144.223 122.26C142.103 122.26 140.263 122.8 138.703 123.88C137.143 124.96 135.843 126.34 134.803 128.02C133.803 129.66 133.043 131.46 132.523 133.42C132.043 135.38 131.803 137.24 131.803 139ZM170.049 160V117.46H175.449V140.98L197.409 117.4H203.229L186.129 136.18L204.189 160H198.309L182.829 139.3L175.449 146.98V160H170.049ZM226.05 136.54V140.86H218.97V148.54H214.17V140.86H207.09V136.54H214.17V128.86H218.97V136.54H226.05Z" fill="white"/>
                        <g filter="url(#filter0_di_78_77)">
                        <circle cx="139" cy="139" r="110" stroke="url(#paint0_linear_78_77)" strokeWidth="10" shapeRendering="crispEdges"/>
                        </g>
                        <defs>
                        <filter id="filter0_di_78_77" x="0" y="0" width="278" height="278" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="12"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0883301 0 0 0 0 1 0 0 0 0 0.69611 0 0 0 0.5 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_77"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_78_77" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_78_77"/>
                        </filter>
                        <linearGradient id="paint0_linear_78_77" x1="139" y1="29" x2="139" y2="249" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#006745"/>
                        <stop offset="1" stopColor="#17FFB2"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div className="text">{t("whyUs.trust")}</div>
                </div>
                <img className="icon" src="img/nums-icon.svg"  />
                <div className="circle">
                    <svg className="num" width="278" height="278" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M89.27 164V151.33H65.89V145.8L91.16 114.3H95.43V145.73H101.59V151.33H95.43V164H89.27ZM72.33 145.73H89.9V123.75L72.33 145.73ZM128.55 164.7C125.097 164.653 122.064 163.837 119.45 162.25C116.884 160.663 114.714 158.657 112.94 156.23C111.214 153.757 109.907 151.05 109.02 148.11C108.134 145.17 107.69 142.3 107.69 139.5C107.69 136.513 108.157 133.527 109.09 130.54C110.07 127.507 111.47 124.8 113.29 122.42C115.11 119.993 117.304 118.033 119.87 116.54C122.437 115.047 125.33 114.3 128.55 114.3C132.004 114.3 135.014 115.117 137.58 116.75C140.194 118.337 142.364 120.367 144.09 122.84C145.864 125.313 147.194 128.043 148.08 131.03C148.967 133.97 149.41 136.793 149.41 139.5C149.41 142.533 148.92 145.543 147.94 148.53C147.007 151.517 145.63 154.2 143.81 156.58C141.99 158.96 139.797 160.897 137.23 162.39C134.664 163.883 131.77 164.653 128.55 164.7ZM114.06 139.5C114.107 141.787 114.434 144.097 115.04 146.43C115.694 148.717 116.627 150.793 117.84 152.66C119.054 154.527 120.547 156.067 122.32 157.28C124.094 158.447 126.17 159.03 128.55 159.03C131.024 159.03 133.17 158.4 134.99 157.14C136.81 155.88 138.304 154.293 139.47 152.38C140.684 150.467 141.57 148.367 142.13 146.08C142.737 143.747 143.04 141.553 143.04 139.5C143.04 137.213 142.714 134.927 142.06 132.64C141.407 130.307 140.474 128.207 139.26 126.34C138.047 124.473 136.53 122.957 134.71 121.79C132.89 120.577 130.837 119.97 128.55 119.97C126.077 119.97 123.93 120.6 122.11 121.86C120.29 123.12 118.774 124.73 117.56 126.69C116.394 128.603 115.507 130.703 114.9 132.99C114.34 135.277 114.06 137.447 114.06 139.5ZM201.66 164V125.57L185.14 155.04H181.57L164.98 125.57V164H158.68V114.3H165.33L183.32 146.57L201.38 114.3H207.96V164H201.66Z" fill="white"/>
                        <g filter="url(#filter0_di_0_1)">
                        <circle cx="139" cy="139" r="110" stroke="url(#paint0_linear_0_1)" strokeWidth="10" shapeRendering="crispEdges"/>
                        </g>
                        <defs>
                        <filter id="filter0_di_0_1" x="0" y="0" width="278" height="278" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="12"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0883301 0 0 0 0 1 0 0 0 0 0.69611 0 0 0 0.5 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_1"/>
                        </filter>
                        <linearGradient id="paint0_linear_0_1" x1="139" y1="29" x2="139" y2="249" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#006745"/>
                        <stop offset="1" stopColor="#17FFB2"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div className="text">{t("whyUs.giga")}</div>
                </div>
                <svg className="line" viewBox="0 0 311 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_di_339_256)">
                    <path d="M311 29L24 29" stroke="url(#paint0_linear_339_256)" strokeWidth="10"/>
                    </g>
                    <defs>
                    <filter id="filter0_di_339_256" x="0" y="0" width="335" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="12"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0883301 0 0 0 0 1 0 0 0 0 0.69611 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_339_256"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_339_256" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_339_256"/>
                    </filter>
                    <linearGradient id="paint0_linear_339_256" x1="9.89231" y1="37.9975" x2="341.841" y2="15.8109" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#17FFB2"/>
                    <stop offset="1" stopColor="#006745"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
      )}

            
                
        </div>
    )
}