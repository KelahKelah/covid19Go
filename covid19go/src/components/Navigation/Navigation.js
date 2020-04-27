import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
    return(
        <>
            <BrowserRouter>
                <div className='enwrap'>
                    <p><Link to='/' className='item'>Home</Link></p>
                    <p><Link to='/Donate' className='item'>Donate</Link></p>
                    <p><Link to='/News' className='item'>News</Link></p>
                </div>
            </BrowserRouter>
        </>
    )

}
export default Navigation;