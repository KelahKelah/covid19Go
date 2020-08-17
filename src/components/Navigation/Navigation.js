import React, { useState, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { FaVine, FaCaretDown, FaUserAlt, FaAlignJustify } from 'react-icons/fa';
import  styles  from './Navigation.module.css';

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
    }
    return(        
         <>
            <div className={styles.navContainer}>
                <div className={styles.logoBrand}>
                    <p className={styles.logoLabel}><FaVine className={styles.logo} />COVID19G0</p>
                </div>
                <div className={styles.wrap}>
                    <p><Link to='/' className={styles.item}>Home</Link></p>
                    <p><NavLink to='/news' className={styles.item}>News</NavLink></p>
                    <p><NavLink to='/donate' className={styles.item}>Donate</NavLink></p>
                    <p><NavLink to='/contact' className={styles.item}>Contact</NavLink></p>
                    {/* <p className='icon'><FaAlignJustify onClick={OpenNav} /></p> */}
                </div>
                <div className={styles.admin}>
                    <p><NavLink to='/login' className={styles.item}><FaUserAlt /> </NavLink></p>
                </div>    
                <div className={styles.menu}>
                    <p className={styles.item}><FaAlignJustify /> </p>
                </div>   
            </div>
        </>
    )
}
// withRouter for props.history.push of logout
export default withRouter(Navigation);
