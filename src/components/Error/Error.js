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
