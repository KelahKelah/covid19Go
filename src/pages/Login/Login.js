import React, { useState } from 'react';
import './Login.css';
// import Donate from '../Donate/Donate';

// import Loader from '';

const Login = (props) => {
    const [userLogin, setUserLogin] = useState({username: '', password: ''});

    const handleChange = (e) => {
        e.preventDefault();
        console.log('userData is ',userLogin)
        setUserLogin({...userLogin, [e.target.name]:e.target.value});
    }

    const handleSubmit = () => {
        console.log('kel',userLogin.username)
        // ONE TIME SETTING USERLOGIN 
        // localStorage.setItem('userKey', JSON.stringify(userLogin));
        localStorage.getItem('userKey')
        let user = [];
        user = JSON.parse(localStorage.getItem('userKey'));
        console.log('checking latest user', user)
          if(user.username === userLogin.username && user.password === userLogin.password) {
            props.history.push({
                pathname:'/home',
                state:"testing"
            });
        } else {
            alert('invalid username or password');
        }
       
    }

return (     
        <>
            <div className="login-wrap">
                <div className="login-container">
                <h4 className="login-text">Login as Admin</h4>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input
                        type="text"
                        className="form-control mb-0"
                        placeholder="Enter username"
                        name="username"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control mb-0"
                        placeholder="Password"
                        name="password"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="d-inline-block w-100">
                    <button
                        type="submit"
                        className="btn btn-warning float-right"
                    >
                        Sign in
                    </button>
                    </div>
                </form>
                </div>
              
            </div>
        </>
     )
}
export default Login;