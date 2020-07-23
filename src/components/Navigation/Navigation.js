import React, { useState, useEffect } from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom';
import { FaVine, FaCaretDown, FaBars, FaAlignJustify, FaUserCircle } from 'react-icons/fa';
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

    };
    // Logout component
    const logout = () => {
        props.history.push("/Home");

    };
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
                    {/* <p><NavLink to='/Loader' className='item'>Loader</NavLink></p> */}
                    {/* <p><NavLink to='/Login' className='item'>Login</NavLink></p> */}
                    <p><NavLink to='/Logout' className='item' onClick={logout} >Logout<FaUserCircle /></NavLink></p>
                    <p className='icon'><FaAlignJustify onClick={OpenNav} /></p>

                </div>
            </div>
        </>
    )
}
// withRouter for props.history.push of logout
export default withRouter(Navigation);