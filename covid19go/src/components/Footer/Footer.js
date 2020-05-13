import React from 'react';
import { FaVine, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaWifi } from 'react-icons/fa';
import './Footer.css';
import '../Navigation/Navigation';

const Footer = () => {
    return(
        <div>
            <div className='footer-wrap'>
                <div className='footer-nav'>
                    <div className='footer-logo-brand'>
                        <p className='footer-logo-label'><FaVine className='footer-logo' />COVID19G0</p>
                    </div>
                    <ul>
                        <i><FaTwitter /></i>
                        <i><FaFacebook /></i>
                        <i><FaInstagram /></i>
                        <i><FaYoutube /></i>
                        <i><FaWifi /></i>
                    </ul>
                </div>

                <div className='footer-item'>
                    <span>
                        <li> Channels</li>
                        <li> News Letters</li>
                        <li> Apps</li>
                        <li> Directory</li>
                        <li> Apps</li>
                        <li> Tv Schedule</li>
                    </span>
                    <span>
                        <li> Directory</li>
                        <li> Channels</li>
                        <li> Directory</li>
                        <li> Channels</li>
                        <li> Apps</li>
                        <li> Tv Schedule</li>
                    </span>
                    <span>
                        <li> Podcasts</li>
                        <li> News Letters</li>
                        <li> Directory</li>
                        <li> Channels</li>
                        <li> Apps</li>
                        <li> Tv Schedule</li>                   
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Footer;