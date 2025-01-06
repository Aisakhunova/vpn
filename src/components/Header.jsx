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
 
      <svg className="logo" width="207" height="49" viewBox="0 0 207 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.7683 43.7913C43.7373 39.4648 47.6197 32.4358 47.6197 24.5C47.6197 11.3502 36.9597 0.690186 23.8099 0.690186C10.66 0.690186 0 11.3502 0 24.5C0 32.2155 3.66975 39.0737 9.35899 43.4247C9.68821 42.9913 10.0225 42.5654 10.372 42.1591L10.4164 42.1075C10.6527 41.8324 10.8718 41.5775 11.2028 41.4166C11.3622 40.6174 11.4923 39.8118 11.6223 39.0062C11.7297 38.3409 11.8371 37.6757 11.961 37.0143C12.0069 36.7696 12.0544 36.4914 12.1043 36.1988C12.2442 35.3797 12.4034 34.4471 12.6014 33.8176C12.6386 33.698 12.6677 33.6058 12.7747 33.5289C12.8576 33.581 12.8574 33.644 12.8572 33.7125C12.8571 33.7376 12.857 33.7633 12.861 33.7896C12.9756 34.55 13.0727 35.3135 13.1698 36.0773C13.2898 37.0212 13.4099 37.9657 13.5632 38.9058C13.9908 41.527 14.5555 44.1079 15.1409 46.6825C15.3501 46.7644 15.5608 46.8433 15.7729 46.9194C15.094 43.9079 14.4178 40.8952 13.8502 37.8542C13.7584 37.3613 13.682 36.8499 13.6049 36.334L13.6049 36.3339C13.4364 35.2057 13.2646 34.0556 12.9205 33.029C12.7858 32.6277 12.6243 32.2513 12.4654 31.881C12.0913 31.0093 11.7318 30.1715 11.7712 29.1219C11.8626 26.7137 12.3304 23.7666 12.7615 21.3829C12.8073 21.1293 12.8488 20.8885 12.8885 20.6585L12.8885 20.6584C13.2403 18.619 13.4446 17.4343 15.1465 15.8257C17.0146 14.0597 19.5579 12.1647 21.6816 10.7101L21.6957 10.7005C22.0716 10.4429 23.4801 9.478 23.8058 9.49873C24.0389 9.5134 24.9673 10.1465 25.4082 10.4472L25.4086 10.4474C25.4759 10.4934 25.5318 10.5315 25.5721 10.5585C27.5957 11.9122 29.7326 13.5103 31.5589 15.1258C31.6414 15.1989 31.7229 15.2704 31.8032 15.341L31.8034 15.3412L31.8034 15.3412C32.8958 16.3012 33.7678 17.0675 34.1497 18.6066C34.6449 20.6025 34.9926 23.0527 35.2676 25.1074C35.3004 25.3534 35.3383 25.6205 35.378 25.9004L35.3784 25.9032L35.3786 25.9044C35.5447 27.0762 35.7426 28.4715 35.737 29.4742C35.733 30.1814 35.2937 31.2596 34.8696 32.3007L34.8696 32.3008C34.5743 33.0257 34.2863 33.7325 34.1577 34.2836C33.9131 35.331 33.741 36.4293 33.5694 37.5239C33.4534 38.264 33.3377 39.0024 33.2 39.7223C32.7312 42.1703 32.1888 44.5855 31.63 46.9959C32.7587 46.6036 33.8488 46.1287 34.893 45.5785C34.7965 44.9057 34.715 44.2237 34.646 43.5297C34.3321 40.3714 34.1915 37.1782 34.4711 34.0205C34.4716 34.0142 34.4721 34.0077 34.4724 34.0012C34.4728 33.9952 34.473 33.9891 34.4733 33.9829C34.4734 33.9783 34.4736 33.9738 34.4738 33.9691V33.9691V33.9691C34.4765 33.8897 34.4796 33.8021 34.5609 33.7616C34.6441 33.72 34.6545 33.8096 34.6628 33.8811C34.6653 33.9028 34.6676 33.923 34.6718 33.9371C34.8264 34.4667 34.8864 35.0298 34.946 35.5888C34.9774 35.8838 35.0087 36.1777 35.0537 36.4649C35.1516 37.0886 35.2593 37.7106 35.3669 38.3327L35.367 38.3334L35.367 38.3334L35.3671 38.3335L35.3671 38.3336L35.3671 38.3337C35.5536 39.4114 35.7401 40.4892 35.876 41.5758C36.567 42.2625 37.1768 43.0187 37.7683 43.7913ZM10.9168 44.5204C10.9408 44.2694 10.9646 44.0182 10.9884 43.7669L11.0301 43.3262C10.9226 43.3786 10.8852 43.5253 10.8536 43.6492C10.8459 43.6796 10.8385 43.7085 10.8305 43.7344C10.7686 43.9356 10.713 44.1427 10.661 44.353C10.7459 44.4093 10.8312 44.4652 10.9168 44.5204ZM26.2999 48.1813C27.1384 46.3 27.9641 44.4122 28.7896 42.5247L28.7896 42.5247L28.7896 42.5246L28.7896 42.5246L28.7897 42.5243L28.7907 42.5221C29.3557 41.2303 29.9206 39.9386 30.4896 38.6491C30.8381 37.8594 31.1979 37.0745 31.5577 36.2896L31.5577 36.2896L31.5577 36.2895L31.5578 36.2895C32.479 34.2797 33.4006 32.2694 34.1337 30.1752C32.2073 25.5309 29.4312 21.1076 25.4909 17.9901C24.9306 17.5469 24.3439 17.1287 23.7521 16.7298C21.1784 18.5069 18.9947 20.5751 17.193 23.1623C15.8773 25.052 14.4323 27.4299 13.5935 29.5809C13.3721 30.1482 13.4231 30.2855 13.5697 30.6803C13.6011 30.7648 13.6368 30.8611 13.6753 30.976C13.916 31.6973 14.213 32.4091 14.5062 33.1122L14.6227 33.3918C16.2368 37.2747 17.9792 41.1077 19.721 44.9397C20.2099 46.0151 20.6987 47.0905 21.1847 48.1668C22.0467 48.2614 22.9226 48.3099 23.8099 48.3099C24.6508 48.3099 25.4815 48.2663 26.2999 48.1813Z" fill="#17FFB2"/>
<path d="M63.1004 15.8371H66.5552L68.7315 21.9506L70.9077 15.8371H74.3897L71.0982 24.24L73.5464 30.1454L79.0143 15.785H83.0948L75.233 34.2558H72.0775L68.7315 26.5033L65.3855 34.2558H62.2299L54.4226 15.785H58.4487L63.9437 30.1454L66.3376 24.24L63.1004 15.8371Z" fill="#17FFB2"/>
<path d="M92.1976 23.6416C91.0914 23.659 90.103 23.8671 89.2325 24.266C88.362 24.6475 87.7363 25.2286 87.3555 26.009V34.2558H83.7102V20.6239H87.0562V23.5376C87.3101 23.0693 87.6094 22.6531 87.9539 22.2888C88.2985 21.9073 88.6703 21.5778 89.0693 21.3003C89.4682 21.0228 89.8672 20.8146 90.2662 20.6759C90.6833 20.5198 91.0823 20.4418 91.4631 20.4418C91.6626 20.4418 91.8077 20.4418 91.8984 20.4418C92.0072 20.4418 92.107 20.4504 92.1976 20.4678V23.6416Z" fill="#17FFB2"/>
<path d="M97.9343 34.516C97.2452 34.516 96.6014 34.4119 96.0029 34.2038C95.4044 33.9783 94.8876 33.6748 94.4523 33.2933C94.0171 32.8944 93.6725 32.4348 93.4186 31.9145C93.1828 31.3941 93.0649 30.8218 93.0649 30.1975C93.0649 29.5557 93.21 28.9661 93.5002 28.4284C93.8085 27.8734 94.2256 27.4052 94.7515 27.0236C95.2956 26.642 95.9394 26.3472 96.683 26.1391C97.4265 25.9136 98.2426 25.8009 99.1313 25.8009C99.766 25.8009 100.383 25.8529 100.981 25.957C101.598 26.061 102.142 26.2085 102.613 26.3992V25.6188C102.613 24.7169 102.341 24.0232 101.797 23.5376C101.271 23.052 100.482 22.8091 99.4305 22.8091C98.6688 22.8091 97.9253 22.9392 97.1998 23.1994C96.4744 23.4595 95.7309 23.8411 94.9692 24.344L93.8538 22.1327C95.6855 20.9707 97.6623 20.3897 99.7841 20.3897C101.833 20.3897 103.42 20.8753 104.545 21.8466C105.687 22.8005 106.258 24.1879 106.258 26.009V30.2495C106.258 30.6137 106.322 30.8738 106.449 31.0299C106.594 31.186 106.821 31.2727 107.129 31.2901V34.2558C106.512 34.3772 105.977 34.4379 105.524 34.4379C104.835 34.4379 104.3 34.2905 103.919 33.9957C103.556 33.7008 103.33 33.3106 103.239 32.825L103.157 32.0705C102.523 32.8683 101.752 33.4754 100.845 33.8916C99.9383 34.3078 98.968 34.516 97.9343 34.516ZM98.968 31.9665C99.5846 31.9665 100.165 31.8624 100.709 31.6543C101.271 31.4462 101.706 31.1687 102.015 30.8218C102.414 30.527 102.613 30.1975 102.613 29.8332V28.2723C102.178 28.1162 101.706 27.9948 101.199 27.9081C100.691 27.8041 100.201 27.752 99.7297 27.752C98.7867 27.752 98.0159 27.9601 97.4175 28.3764C96.819 28.7753 96.5197 29.2869 96.5197 29.9113C96.5197 30.501 96.7555 30.9952 97.227 31.3941C97.6986 31.7757 98.2789 31.9665 98.968 31.9665Z" fill="#17FFB2"/>
<path d="M109.665 34.2558V20.6239H113.31V34.2558H109.665ZM109.665 18.7248V15.2647H113.31V18.7248H109.665Z" fill="#17FFB2"/>
<path d="M125.14 33.5534C124.651 33.7615 124.052 33.9696 123.345 34.1778C122.638 34.3859 121.894 34.49 121.114 34.49C120.606 34.49 120.126 34.4293 119.672 34.3078C119.237 34.1864 118.847 33.9957 118.503 33.7355C118.176 33.458 117.913 33.1111 117.714 32.6949C117.514 32.2613 117.415 31.741 117.415 31.134V23.3034H115.538V20.6239H117.415V16.2013H121.06V20.6239H124.052V23.3034H121.06V29.9633C121.06 30.4489 121.187 30.7958 121.441 31.0039C121.713 31.1947 122.039 31.2901 122.42 31.2901C122.801 31.2901 123.173 31.2294 123.535 31.108C123.898 30.9866 124.188 30.8825 124.406 30.7958L125.14 33.5534Z" fill="#17FFB2"/>
<path d="M140.287 34.2558H136.641V26.6074C136.641 25.5321 136.433 24.7429 136.016 24.24C135.599 23.7197 135.009 23.4595 134.248 23.4595C133.921 23.4595 133.577 23.5289 133.214 23.6676C132.851 23.8064 132.507 24.0058 132.18 24.266C131.854 24.5088 131.554 24.8036 131.282 25.1505C131.01 25.4974 130.811 25.8789 130.684 26.2952V34.2558H127.039V15.2647H130.684V23.1473C131.21 22.2628 131.917 21.5864 132.806 21.1182C133.713 20.6325 134.71 20.3897 135.798 20.3897C136.723 20.3897 137.476 20.5458 138.056 20.858C138.636 21.1528 139.09 21.5517 139.416 22.0547C139.743 22.5577 139.969 23.13 140.096 23.7717C140.223 24.4134 140.287 25.0725 140.287 25.7489V34.2558Z" fill="#17FFB2"/>
<path d="M171.553 24.9164H175.905C176.594 24.9164 177.166 24.6476 177.619 24.1099C178.091 23.5723 178.326 22.8438 178.326 21.9246C178.326 21.4564 178.254 21.0401 178.109 20.6759C177.964 20.2944 177.773 19.9735 177.537 19.7133C177.302 19.4532 177.021 19.2624 176.694 19.141C176.386 19.0023 176.068 18.9329 175.742 18.9329H171.553V24.9164Z" fill="#17FFB2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M150.327 10.4086C146.571 10.4086 143.526 13.3204 143.526 16.9124V32.0879C143.526 35.6798 146.571 38.5917 150.327 38.5917H200.199C203.955 38.5917 207 35.6798 207 32.0879V16.9124C207 13.3204 203.955 10.4086 200.199 10.4086H150.327ZM151.401 15.7851L156.624 29.7552L161.793 15.7851H165.737L158.202 34.2558H155.046L147.457 15.7851H151.401ZM167.799 34.2558V15.7851H175.987C176.876 15.7851 177.692 15.9672 178.435 16.3314C179.197 16.6783 179.85 17.1465 180.394 17.7362C180.938 18.3085 181.364 18.9676 181.672 19.7133C181.981 20.4418 182.135 21.1789 182.135 21.9246C182.135 22.7051 181.99 23.4682 181.7 24.214C181.409 24.9424 181.001 25.5928 180.475 26.1651C179.949 26.7374 179.315 27.1971 178.571 27.5439C177.828 27.8908 177.012 28.0642 176.123 28.0642H171.553V34.2558H167.799ZM188.502 34.2558V22.4189L198.431 34.2558H201.478V15.8111H197.724V27.9081L187.658 15.7851H184.748V34.2558H188.502Z" fill="#17FFB2"/>
</svg>

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
              <a className="startButton header-btn for-mb nowrap"  href="https://t.me/exeslam"
            target="_blank"
            rel="noopener noreferrer">{t("header.getAccess")}</a>
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
