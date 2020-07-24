import { React } from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
    return(
    <>
    <div>
        <p>You have bo news to display at the moment!</p>
        <p>Click <Link to="/home">here</Link>to go back to home</p>
    </div>
    
    </>
    )
}