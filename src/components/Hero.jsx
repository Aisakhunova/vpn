import { motion } from 'framer-motion';
import videoSrc from '../videos/video.mp4'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
      <video autoPlay muted loop playsInline className="background-video">
    <source src={videoSrc} type="video/mp4" />
  </video>
        <div className='text-left'>
          <div>
            <div className='title'>
              {t("header.your")} 
              <span className='green-back'>
                {t("header.online")} 
                <span className='green-mob'>
                  {t("header.freedom")}
                </span> 
              </span>
              <br />
              {t("header.startsHere")}
            </div>
            <div className='description mTop'>
              <div>{t("header.anonymous")}</div>
              <div>{t("header.noLogs")}</div>
              <div>{t("header.browsing")}</div>
            </div>
          </div>
          <div className='bottom-text'>
            <a
              className="startButton st-btn"
              href="https://t.me/exeslam"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("header.start")}
            </a>

            <div className='text-right'>
              <div className='enjoy'>{t("header.enjoy")}</div>
              <div className='mTop'>{t("header.noWorry")}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const styles = {
  bottomText: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    height: "30%",
    bottom: "0",
 
  },

  textRight: {
    fontFamily: "Raleway",
    textAlign: "right",
    width: "33%",
  },
}

export default Hero;
