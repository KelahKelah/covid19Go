import React, { useEffect } from 'react';
import './Donate.css';
import Modal from '../../components/Modal/Modal'
import {FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Donate = (props) => {
    useEffect(() => {

    }, [])
    
    return(
        <>
            <div className="donate-wrap">
            
                <div className='heading'>
                    <h2>Donate to Covid19GO!</h2>
                </div>
                <div className='wrap-two'>
                    <div className="donate-text">
                        <i><FaQuoteLeft /></i>
                        <p>Covid19GO is an independent, non-profit organization passionate about helping covid19 victims all over the world. 
                                This includes sponsoring victims for proper medical care, providing essentials such as drugs, food items, 
                                facemask and so much more. 
                        </p>
                        <p>We do believe that our contributions will go a long way in kicking covid19 out of our universe. We rely entirely 
                            on donations and receive no money from any governments or corporations. Our tiny online team ensures even the 
                            smallest contributions go a long way.
                        </p>
                        <p>If you have any questions about how we intend to use funds, 
                            please feel free to email us here. Our payment process is fully encrypted to 
                            ensure all information is kept safe us. 
                            
                        </p> 
                       <i><FaQuoteRight  /></i>
                    </div>
                    
                    <div className="payment">
                        <div>
                            <button className="btn btn-warning" data-toggle="" data-taget="#paymentModal">Donate</button>
                        </div>
                        
                    </div>             
                </div>
                
            </div>
            {/* Payment Modal  */}
            <div data-target="id">
                <div className="modal-head"></div>
                <div className="modal-content">
                    {/* <p>Yes</p> */}
                </div>

            </div>
        </>
    )
}
export default Donate;