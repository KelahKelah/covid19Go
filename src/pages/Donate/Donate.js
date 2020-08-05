import React, { useEffect } from 'react';
import './Donate.css';
import Modal from '../../components/Modal/Modal'
import {FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
// import Login from '../Login/Login';

const Donate = (props) => {
    // console.log('CHECKING TEST',props.location.state)
    const { state } = props.location
    // useEffect(() => {
    //     const {submit} = props
    //     console.log("checking",submit)
 
    const handleModalSubmit = () => {
        // props.history.push(
        //     {
        //         pathname: '/sucess',
        //         state: ''
        //     }
        // )
        console.log('calling me')

    }

    // console.log("checking",state)
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
                        <button type="button" data-toggle="modal" data-target="#paymentModal" className="btn btn-warning" >Donate</button>
                    </div>           
                          
                </div>
            </div>
            
       
            {/* Payment Modal  */}
            <div className="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add payment info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleModalSubmit} >
                                <div className="form-group">
                                    <label>Full name</label>
                                    <input type="text" name="" required />
                                </div>
                                <div className="form-group">
                                    <label>Email </label>
                                    <input type="email" name="" required />
                                </div>
                                <div className="form-group">
                                    <label>Payment Method</label>
                                    <input type="select" name="" required />
                                </div>
                                <div className="form-group">
                                    <label>Card number</label>
                                    <input type="number" name="" required />
                                </div>
                                <div className="form-group">
                                    <label>Add Cvv</label>
                                    <input type="number" name="" required />
                                </div>
                                
                                <div className="form-group">
                                    <label>Expiry date</label>
                                    <input type="number" name="" required />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" name="" required />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-warning">Pay</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Donate;