import React from 'react';
import { FaVine, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaWifi } from 'react-icons/fa';
import './Footer.css';
import '../Navigation/Navigation';
import Navigation from '../Navigation/Navigation';

const Footer = () => {
    return(
        <div>
            <div className='footer_wrap'>
                {/* <Navigation /> */}
                <div className='footer_nav'>
                    <div className='footer_logo_brand'>
                        <p className='footer_logo_label'><FaVine className='footer_logo' />COVID19G0</p>
                    </div>
                    <ul>
                        <i><FaTwitter /></i>
                        <i><FaFacebook /></i>
                        <i><FaInstagram /></i>
                        <i><FaYoutube /></i>
                        <i><FaWifi /></i>
                    </ul>
                </div>

                <div className='footer_item'>
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