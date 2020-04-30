import React from 'react';
import { Link, NavLink, BrowserRouter } from 'react-router-dom';
import { FaVine, FaCaretDown } from 'react-icons/fa';
import './Navigation.css';


const Navigation = () => {
    return(
        <>
            <BrowserRouter>
                <div className='nav_wrap'>
                    <div className='logo_brand'>
                        <p className='logo_label'><FaVine className='logo' />COVID19G0</p>
                    </div>
                    <div className='wrap'>
                        <p><Link to='/' className='item'>Home</Link></p>
                        <p><NavLink to='/Donate' className='item'>Donate</NavLink></p>
                        <p><NavLink to='/News' className='item'>News</NavLink></p>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )

}
export default Navigation;