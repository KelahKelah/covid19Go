import React, { useEffect } from 'react';
import axios from 'axios';

const Login = (props) => {

     const postUrl = "https://lawyerppserver.herokuapp.com/api/auth/authenticate"


    const handleSubmit = () => {
        console.log('Loggednin')
        props.history.push('/Home')
        console.log('checking login props',props)
    }

    useEffect(() => {
        axios.post(postUrl, {payload: {email: "", password:""}})
        .then((response) => {
            console.log('the response', response )
        })
    }, []);
return(     
        <>
        <div className="sign-in-page bg-white">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                <div className="col-sm-6 align-self-center">
                    <div className="sign-in-from">
                    <h1 className="mb-0">Log in</h1>
                    <p>Enter your email address and password to log in.</p>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
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
                <div className="col-sm-6">
                    <div className="login-image">

                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
     )
}
export default Login;