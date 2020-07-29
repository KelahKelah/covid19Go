import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaVine, FaCaretDown, FaBars, FaAlignJustify } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
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
                    <p><NavLink to='/News' className='item'>News</NavLink></p>
                    <p><NavLink to='/Donate' className='item'>Donate</NavLink></p>
                    <p><NavLink to='/Login' className='item'>Login</NavLink></p>
                    <p className='icon'><FaAlignJustify onClick={OpenNav} /></p>
                </div>
            </div>
        </>
    )

}
export default Navigation;