<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Link, NavLink, withRouter} from 'react-router-dom';
import { FaVine, FaCaretDown, FaBars, FaAlignJustify, FaUserCircle } from 'react-icons/fa';
=======
import { Link, NavLink } from 'react-router-dom';
import { FaVine, FaCaretDown, FaUserAlt, FaAlignJustify } from 'react-icons/fa';
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
import './Navigation.css';

const Navigation = (props) => {
    // const [toggle, setToggle] = useState()
    // useEffect() {
    // }
    const OpenNav = () => {
        const myLoop = document.querySelectorAll('.item')
        var i;
         for(i=0; i < myLoop.length; i++) {
        console.log(myLoop[i])
           myLoop[i].style.display = 'block'
        }
<<<<<<< HEAD

    };
    // Logout component
    const logout = () => {
        props.history.push("/Home");

    };
    return(         
    <>
=======
    }
    return(        
         <>
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
            <div className='nav-wrap'>
                <div className='logo-brand'>
                    <p className='logo-label'><FaVine className='logo' />COVID19G0</p>
                </div>
                <div className='wrap'>
                    <p><Link to='/' className='item'>Home</Link></p>
<<<<<<< HEAD
                    <p><NavLink to='/News' className='item'>News</NavLink></p>
                    <p><NavLink to='/Donate' className='item'>Donate</NavLink></p>
                    {/* <p><NavLink to='/Loader' className='item'>Loader</NavLink></p> */}
                    {/* <p><NavLink to='/Login' className='item'>Login</NavLink></p> */}
                    <p><NavLink to='/Logout' className='item' onClick={logout} >Logout<FaUserCircle /></NavLink></p>
                    <p className='icon'><FaAlignJustify onClick={OpenNav} /></p>

=======
                    <p><NavLink to='/news' className='item'>News</NavLink></p>
                    <p><NavLink to='/donate' className='item'>Donate</NavLink></p>
                    <p><NavLink to='/contact' className='item'>Contact</NavLink></p>
                    {/* <p className='icon'><FaAlignJustify onClick={OpenNav} /></p> */}
                </div>
                <div className="admin">
                    <p><NavLink to='/login' className='item'><FaUserAlt /> </NavLink></p>
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
                </div>
            </div>
        </>
    )
}
// withRouter for props.history.push of logout
export default withRouter(Navigation);
>>>>>>> f23878a91ed47f2bc0418254cdc6339455fa5272
