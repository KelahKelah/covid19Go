import React from "react";
import {
  FaVine,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWifi,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import "../Navigation/Navigation";

const Footer = () => {
  return (
    <div className={styles.footerWrap}>
      <div className={styles.footerNav}>
        <div className={styles.footerLogoBrand}>
          <p className={styles.footerLogoLabel}>
            <FaVine className={styles.footerLogo} />
            COVID19G0
          </p>
        </div>
        <ul className="">
          <i>
            <FaTwitter />
          </i>
          <i>
            <FaFacebook />
          </i>
          <i>
            <FaInstagram />
          </i>
          <i>
            <FaYoutube />
          </i>
          <i>
            <FaWifi />
          </i>
        </ul>
      </div>

      <div className={styles.footerItem}>
        <span>
          <li> Channels</li>
          <li> News </li>
          <li> Apps</li>
          <li> Directory</li>
          <li> Apps</li>
        </span>
        <span>
          <li> Directory</li>
          <li> Channels</li>
          <li> Directory</li>
          <li> Channels</li>
          <li> Apps</li>
        </span>
        <span>
          <li> Podcasts</li>
          <li> News</li>
          <li> Directory</li>
          <li> Channels</li>
          <li> Apps</li>
        </span>
      </div>
    </div>

  );
};
export default Footer;
