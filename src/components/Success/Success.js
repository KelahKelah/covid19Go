import  React  from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return(
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Yay!</h1>
                </div>
                <h2>Payment was successful!</h2>
                <p>Click <Link to="/home">here</Link>to go back to the home page</p>
            </div>
	    </div>
    )
}
export default Success;