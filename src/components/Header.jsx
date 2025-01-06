import { useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../assets/Logo';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className={`header ${menuOpen ? 'menu-open' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src="img/logo2.png" className="logo" alt="" />
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            className="cross-icon"
          >
            <line x1="5" y1="5" x2="25" y2="25" stroke="white" strokeWidth="3" />
            <line x1="25" y1="5" x2="5" y2="25" stroke="white" strokeWidth="3" />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            className="hamburger-icon"
          >
            <rect width="30" height="5" y="9" fill="white" />
            <rect width="30" height="5" y="18" fill="white" />
          </svg>
        )}
      </div>
      
      <motion.nav
        initial={{ height: 0 }}
        animate={{
          height: menuOpen ? 'auto' : window.innerWidth > 768 ? 'auto' : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div>
          <ul className={menuOpen ? 'open' : ''}>
            <li>
              <a href="#hero" onClick={() => setMenuOpen(false)}>
                {t("header.home")}
              </a>
            </li>
            <li>
              <a href="#whyUs" onClick={() => setMenuOpen(false)}>
                {t("header.whyUs")}
              </a>
            </li>
            <li>
              <a href="#privacy" onClick={() => setMenuOpen(false)}>
                {t("header.private")}
              </a>
            </li>
            
            <li>
              <button className="startButton header-btn for-mb nowrap">{t("header.getAccess")}</button>
            </li>
          </ul>
        </div>
      </motion.nav>
      <a
            className="startButton header-btn for-lg nowrap"
            href="https://t.me/exeslam"
            target="_blank"
            rel="noopener noreferrer"
        >
            {t("header.getAccess")}
        </a>
    </motion.header>
  );
};

export default Header;
