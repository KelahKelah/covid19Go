<<<<<<< HEAD
import React, { useEffect } from 'react';
import axios from 'axios';

const Login = (props) => {

     const postUrl = "https://lawyerppserver.herokuapp.com/api/auth/authenticate"

=======
import React, { useState } from 'react';
import './Login.css';
// import Donate from '../Donate/Donate';

// import Loader from '';

const Login = (props) => {

    const handleChange = (e) => {
        e.preventDefault();
    }
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4

    const handleSubmit = () => {
        if(true) {
            // props.history.push('/Home')
            props.history.push({
                pathname:'/home',
                state:"testing"
            })
            console.log('checking login props',props)
        }
       
    }

<<<<<<< HEAD
    useEffect(() => {
        axios.post(postUrl, {payload: {email: "", password:""}})
        .then((response) => {
            console.log('the response', response )
        })
    }, []);
return(     
=======
    
return (     
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
        <>
            <div className="login-wrap">
                    <div className="login-container">
                    <p>Login as Admin</p>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            className="form-control mb-0"
                            placeholder="Enter email"
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control mb-0"
                            placeholder="Password"
                        />
                        </div>
                        <div className="d-inline-block w-100">
                        <button
                            type="submit"
                            className="btn btn-warning float-right"
                        >
                            Sign in
                        </button>
                        {/* {isLoading === "yes" ? (
                            <Loader />
                        ) : isLoading === "error" ? (
                            <small>Something went wrong, refresh</small>
                        ) : null} */}
                        </div>
                    </form>
                    </div>
              
            </div>
        </>
     )
}
export default Login;