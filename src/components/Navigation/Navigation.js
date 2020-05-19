import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaVine, FaCaretDown } from 'react-icons/fa';
import './Navigation.css';


const Navigation = () => {
    return(
        <>
            <div className='nav-wrap'>
                <div className='logo-brand'>
                    <p className='logo-label'><FaVine className='logo' />COVID19G0</p>
                </div>
                <div className='wrap'>
                    <p><Link to='/' className='item'>Home</Link></p>
                    <p><NavLink to='/Donate' className='item'>Donate</NavLink></p>
                    <p><NavLink to='/News' className='item'>News</NavLink><FaCaretDown /></p>
                </div>
            </div>
        </>
    )

}
export default Navigation;