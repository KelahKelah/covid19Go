import React, { useState, useEffect } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { FaVine, FaUserAlt, FaAlignJustify } from "react-icons/fa";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const [toggle, setToggle] = useState(false);
  
  const slideSideBar = () => {
    const myLoop = document.querySelector(".item");
    var i;
    for (i = 0; i < myLoop.length; i++) {
      console.log(myLoop[i]);
      myLoop[i].style.display = "block";
    }
  };
  return toggle ? (
    <div className={styles.sideNav}>
        <div  className={`close ${styles.buttonClose}`} onClick={()=>{setToggle(false)}} >&times;</div>
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
        {/* <p className='icon'><FaAlignJustify onClick={OpenNav} /></p> */}
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
        {/* <p className='icon'><FaAlignJustify onClick={OpenNav} /></p> */}
      </div>
      <div className={styles.admin}>
        <p>
          <NavLink to="/login" className={styles.item}>
            <FaUserAlt />{" "}
          </NavLink>
        </p>
      </div>
      
      {/* Displays the sidebar menu onclick  */}
      <div className={styles.handburger}>
        <p
          className={styles.item}
          onClick={() => {
            setToggle(true);
          }}
        >
          <FaAlignJustify />{" "}
        </p>
      </div>
    </div>
  );
};
// withRouter for props.history.push of logout
export default withRouter(Navigation);
