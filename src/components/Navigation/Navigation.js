import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaVine,FaTimes, FaUserAlt, FaAlignJustify } from "react-icons/fa";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  // useEffect() {
  // }
  const OpenNav = () => {
    // const myLoop = document.querySelectorAll(".item");
    // var i;
    // for (i = 0; i < myLoop.length; i++) {
    //   console.log(myLoop[i]);
    //   myLoop[i].style.display = "block";
    // }
  };
  return toggle ? (
    <div>
      <div className={styles.sideNav}>
        <p> <FaTimes /></p>
        <p>
          <Link to="/" className={styles.sideNavItem}>
            Home
          </Link>
        </p>
        <p>
          <NavLink to="/news" className={styles.sideNavItem}>
            News
          </NavLink>
        </p>
        <p>
          <NavLink to="/donate" className={styles.sideNavItem}>
            Donate
          </NavLink>
        </p>
        <p>
          <NavLink to="/contact" className={styles.sideNavItem}>
            Contact
          </NavLink>
        </p>
      </div>
    </div>
  ) : (
    <div className={styles.navContainer}>
      <div className={styles.logoBrand}>
        <p className={styles.logoLabel}>
          <FaVine className={styles.logo} />
          COVID19G0
        </p>
      </div>
      <div className={styles.wrap}>
        <p>
          <Link to="/" className={styles.item}>
            Home
          </Link>
        </p>
        <p>
          <NavLink to="/news" className={styles.item}>
            News
          </NavLink>
        </p>
        <p>
          <NavLink to="/donate" className={styles.item}>
            Donate
          </NavLink>
        </p>
        <p>
          <NavLink to="/contact" className={styles.item}>
            Contact
          </NavLink>
        </p>
      </div>
      <div className={styles.admin}>
        <p>
          <NavLink to="/login" className={styles.item}>
            <FaUserAlt />{" "}
          </NavLink>
        </p>
      </div>
      <p className={styles.menu} onClick={()=>setToggle(true)}>
        <FaAlignJustify />
      </p>
    </div>
  );
};
export default Navigation;
