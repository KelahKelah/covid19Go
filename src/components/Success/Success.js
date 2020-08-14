import  React  from "react";
import { Link } from "react-router-dom";

const Success = ({fullName}) => {
    console.log('checking fullname', fullName)
    return(
        <div id="notfound">
            <div className="notfound">
                {/* <div className="notfound-404">
                    <h1>Yay!</h1>
                </div> */}
                <h2>Yay!{fullName}</h2>
                <h2>Payment was successful!</h2>
                <p>Click <Link to="/home">here</Link>to go back to the home page</p>
            </div>
	    </div>
    )
}
export default Success;