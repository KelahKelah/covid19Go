import  React  from "react";
import { Link } from "react-router-dom";
import './Error.css';

const Errorpage = () => {
    return(
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed.</p>
                <p>Click <Link to="/home">here</Link>to go back to the home page</p>
                {/* <a href="#">Go To Homepage</a> */}
            </div>
	    </div>
    // <div className="">
    //     <p>Sorry we have no news to display at this point!</p>
    //     <p>Click <Link to="/home">here</Link>to go back to the home page</p>
    // </div>
    )
}
export default Errorpage;