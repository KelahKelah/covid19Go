import  React  from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
    return(
    <div>
        <p>Sorry we have no news to display at this point!</p>
        <p>Click <Link to="/home">here</Link>to go back to the home page</p>
    </div>
    )
}
export default Errorpage;