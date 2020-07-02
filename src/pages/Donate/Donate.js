import React, { useEffect } from 'react';
import './Donate.css';
import Modal from '../../components/Modal/Modal'
import {FaQuoteLeft, FaQuoteRight, FaCaretRight} from 'react-icons/fa'

const Donate = (props) => {
    useEffect(() => {

    }, [])
    
    return(
        <>
            <div className="donate-wrap">
            <Modal 
        
             />
                <div className='heading'>
                    <h2>Donate to Covid19GO!</h2>
                </div>
                <div className='wrap-two'>
                    <div className="donate-text">
                        <i><FaQuoteLeft /></i>
                        <p className='text'>Covid19GO is an independent, non-profit organization passionate about helping covid19 victims all over the world. 
                                This includes sponsoring victims for proper medical care, providing essentials such as drugs, food items, 
                                facemask and so much more. 
                        </p>
                        <p className='text'>We do believe that our contributions will go a long way in kicking covid19 out of our universe. We rely entirely 
                            on donations and receive no money from any governments or corporations. Our tiny online team ensures even the 
                            smallest contributions go a long way.
                        </p>
                        <p className='text'>If you have any questions about how we intend to use funds, 
                            please feel free to email us here. Our payment process is fully encrypted to 
                            ensure all information is kept safe us. 
                            
                        </p> 
                       <i><FaQuoteRight  /></i>
                    </div>
                    
                    <div className="payment">
                        <div>
                            <button>Next Step<FaCaretRight /></button>
                        </div>
                        
                    </div>             
                </div>
                
            </div>
        </>
    )
}
export default Donate;