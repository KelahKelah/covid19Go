<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Donate.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Success from "../../components/Success/Success";
=======
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Donate.css';
<<<<<<< HEAD
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
=======
import {FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Success from '../../components/Success/Success';
>>>>>>> f23878a91ed47f2bc0418254cdc6339455fa5272

const Donate = (props) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    paymentMethod: "",
    cardNumber: "",
    addCvv: "",
    expiryDate: "",
    amount: "",
  });
  const [data, setDate] = useState({ fullName: "" });
  const [success, setSucess] = useState(false);
  // console.log('CHECKING TEST',props.location.state)
  const { state } = props.location;
  // useEffect(() => {
  //     const {submit} = props
  //     console.log("checking",submit)

  // console.log("checking",state)

  const handleInputs = (e) => {
    console.log("checking for events", e);
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    console.log("Inputs after setting input", inputs);
  };

  const handleModalSubmit = (input) => {
    props.history.push({
      pathname: "/Success",
      // pathname: `/Success${input}`,
      state: "input.name",
    });
    if (
      inputs.fullName &&
      inputs.email &&
      inputs.paymentMethod &&
      inputs.cardNumber &&
      inputs.cardNumber &&
      inputs.addCvv &&
      inputs.expiryDate &&
      inputs.amount
    ) {
    }
  };
  return (
    <div className={styles.donateWrap}>
      <div className={styles.heading}>
        <h2>Donate to Covid19GO!</h2>
      </div>
      <div className={styles.wrapTwo}>
        <div className={styles.donateText}>
          <p>
            <i>
              <FaQuoteLeft />
            </i>{" "}
            Covid19GO is an independent, non-profit organization passionate
            about helping covid19 victims all over the world. This includes
            sponsoring victims for proper medical care, providing essentials
            such as drugs, food items, facemask and so much more.
          </p>
          <p>
            We believe that our contributions will go a long way in kicking
            covid19 out of our universe. We rely entirely on donations and
            receive no money from any governments or corporations. Our tiny
            online team ensures even the smallest contributions go a long way.
          </p>
          <p>
            If you have any questions about how we use funds, please feel free
            to email us <Link to="">here</Link>. Our payment process is fully
            encrypted to ensure all information is safe with us{" "}
            <i>
              <FaQuoteRight />
            </i>
          </p>
        </div>

<<<<<<< HEAD
        <div className={styles.payment}>
          <button
            type="button"
            data-toggle="modal"
            data-target="#paymentModal"
            className="btn btn-warning"
          >
            Donate
          </button>
        </div>
      </div>
=======
            {/* Modal                */}
            {success? 
            <Success fullName={inputs.fullName} /> :
        
            <div className="modal fade" id="paymentModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Add payment info</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleModalSubmit} >
                                <div className="form-group">
                                    <label>Full name</label>
                                    <input type="text" name="fullName" value={inputs.fullName} onChange={handleInputs} required />
                                </div>
                                <div className="form-group">
                                    <label>Email </label>
                                    <input type="email" name="email" value={inputs.email} onChange={handleInputs} required />
                                </div>
                                <div className="form-group">
                                    <label>Payment Method</label>
                                    <input type="select" name="paymentMethod" value={inputs.paymentMethod} onChange={handleInputs} required />
                                </div>
                                <div className="form-group">
                                    <label>Card number</label>
                                    <input type="number" name="cardNumber" value={inputs.cardNumber} onChange={handleInputs} required />
                                </div>
                                <div className="form-group">
                                    <label>Add Cvv</label>
                                    <input type="number" name="addCvv" value={inputs.addCvv} onChange={handleInputs} required />
                                </div>
                                <div className="form-group">
                                    <label>Expiry date</label>
                                    <input type="number" name="expiryDate" value={inputs.expiryDate} onChange={handleInputs} required />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" name="amount" value={inputs.amount} onChange={handleInputs} required />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-warning">Pay</button>
                                </div>
                            </form>
                            
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
                        </div>
                        
                    </div>
                </div>
<<<<<<< HEAD
                
            </div>
            {/* Payment Modal  */}
            <div data-target="id">
                <div class="modal-head"></div>
                <div class="modal-content">
                    {/* <p>Yes</p> */}
                </div>

            </div>
        </>
=======
            </div> }
>>>>>>> f23878a91ed47f2bc0418254cdc6339455fa5272

      {/* Modal                */}
      {success ? (
        <Success fullName={inputs.fullName} />
      ) : (
        <div
          className="modal fade"
          id="paymentModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  Add payment info
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleModalSubmit}>
                  <div className="form-group">
                    <label>Full name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={inputs.fullName}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email </label>
                    <input
                      type="email"
                      name="email"
                      value={inputs.email}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Payment Method</label>
                    <input
                      type="select"
                      name="paymentMethod"
                      value={inputs.paymentMethod}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Card number</label>
                    <input
                      type="number"
                      name="cardNumber"
                      value={inputs.cardNumber}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Add Cvv</label>
                    <input
                      type="number"
                      name="addCvv"
                      value={inputs.addCvv}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Expiry date</label>
                    <input
                      type="number"
                      name="expiryDate"
                      value={inputs.expiryDate}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Amount</label>
                    <input
                      type="number"
                      name="amount"
                      value={inputs.amount}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-warning">
                      Pay
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      )}
    </div>
  );
};
=======
            
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
    )
}
>>>>>>> f23878a91ed47f2bc0418254cdc6339455fa5272
export default Donate;
