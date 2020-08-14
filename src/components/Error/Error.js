<<<<<<< HEAD
import React from 'react';

const AllError = () => {
    return(
        <>
            Opps! An error just occurred! 
        </>
    )
}
export default AllError;
=======
import  React  from "react";
import { Link } from "react-router-dom";
import './Error.css';

const Errorpage = () => {
    return(
        <div id="notfound">
            <div className="notfound">
                <h2>404 - Page not found</h2>
                <p>No news available at the moment.</p>
                <p>Click <Link to="/home">here</Link> to go back to the home page</p>
                {/* <a href="#">Go To Homepage</a> */}
            </div>
	    </div>
   
    )
}
export default Errorpage;
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
