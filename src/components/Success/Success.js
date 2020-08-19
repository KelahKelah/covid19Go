import  React, { useState }  from "react";
import { Link } from "react-router-dom";

const Success = ({fullName}) => {
    // const [toggle, setToggle] = useState()
    console.log('checking fullname', fullName)
    return(
        <div id="notfound">
            <div className="notfound">
                <h2>Yay!{fullName}</h2>
                <h2>Payment was successful!</h2>
                <p>Click <Link to="/home">here</Link>to go back to the home page</p>
            </div>
	    </div>
    )
}
export default Success;