import React, { useState } from 'react';
// import '';


const Contact = (props) => {

    const handleChange = (e) => {
        e.preventDefault();
    }

    const handleSubmit = () => {
        if(true) {
            // props.history.push('/Home')
            props.history.push({
                pathname:'/success',
                state:"testing"
            })
            console.log('checking login props',props)
        }
       
    }

    
return (     
        <>
            <div className="login-wrap">
                    <div className="login-container">
                    <p>Get in touch </p>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="form-group">
                        {/* <label htmlFor="exampleInputEmail1">Full name</label> */}
                        <input
                            type="text"
                            className="form-control mb-0"
                            placeholder="Full name"
                        />
                        </div>
                        <div className="form-group">
                        {/* <label htmlFor="exampleInputPassword1">Email</label> */}
                        <input
                            type="email"
                            className="form-control mb-0"
                            placeholder="Email"
                        />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="exampleInputPassword1"></label> */}
                            <textarea className="form-control mb-0" id="exampleFormControlTextarea1" rows="5" placeholder="Whats on your mind" ></textarea> 
                        </div>
                        <div className="d-inline-block w-100">
                        <button
                            type="submit"
                            className="btn btn-warning float-right"
                            onClick={handleSubmit}
                        >
                            Send
                        </button>        
                        </div>
                    </form>
                    </div>
              
            </div>
        </>
     )
}
export default Contact;