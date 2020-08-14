import React, { useState, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { FaVine, FaCaretDown, FaUserAlt, FaAlignJustify } from 'react-icons/fa';
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
    }
    return(        
         <>
            <div className='nav-wrap'>
                <div className='logo-brand'>
                    <p className='logo-label'><FaVine className='logo' />COVID19G0</p>
                </div>
                <div className='wrap'>
                    <p><Link to='/' className='item'>Home</Link></p>
                    <p><NavLink to='/news' className='item'>News</NavLink></p>
                    <p><NavLink to='/donate' className='item'>Donate</NavLink></p>
                    <p><NavLink to='/contact' className='item'>Contact</NavLink></p>
                    {/* <p className='icon'><FaAlignJustify onClick={OpenNav} /></p> */}
                </div>
                <div className="admin">
                    <p><NavLink to='/login' className='item'><FaUserAlt /> </NavLink></p>
                </div>
            </div>
        </>
    )
}
// withRouter for props.history.push of logout
export default withRouter(Navigation);