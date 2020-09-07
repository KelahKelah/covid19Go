import React, { useState } from 'react';
import './Login.css';
// import Donate from '../Donate/Donate';

// import Loader from '';

const Login = (props) => {

    const handleChange = (e) => {
        e.preventDefault();
    }

    const handleSubmit = () => {
        if(true) {
            props.history.push({
                pathname:'/home',
                state:"testing"
            })
            console.log('checking login props',props)
        }
       
    }

    
return (     
        <>
            <div className="login-wrap">
                    <div className="login-container">
                    <h4 className="login-text">Login as Admin</h4>
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