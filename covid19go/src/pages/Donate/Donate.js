import React from 'react';
import './Donate.css';
import {FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Donate = (props) => {
    
    return(
        <>
            <div className='heading'>
                    <h2>Donate to Covid19GO!</h2>
            </div>
            <div className="donate-wrap">
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
                        <p className='text'>If you encounter any problems with this page or have any questions or comments about how we intend to use funds, 
                            please feel free to email us by clicking here.covid19Go is secure. Our donation process is fully encrypted to 
                            ensure all personal and financial information is kept safe.With your donation you accept Covid19GO's privacy 
                            policy. You can unsubscribe at any time.
                        </p> 
                       <i><FaQuoteRight  /></i>
                    </div>
                    
                    <div className="payment">
                        <p>Select Amount</p>
                        <div>
                            <button>5</button>
                            <button>10</button>
                            <button>15</button>
                            <button>20</button>
                        </div>
                        
                    </div>             
                </div>
                
            </div>
        </>
    )
}
export default Donate;