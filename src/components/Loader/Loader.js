import React from "react";
<<<<<<< HEAD

function Loader() {
  console.log('checking somethings')
  return (
    <div id="loading">
      <div id="loading-center">
        <div class="loader">
          <div class="cube">
            <div class="sides">
              <div class="top"></div>
              <div class="right"></div>
              <div class="bottom"></div>
              <div class="left"></div>
              <div class="front"></div>
              <div class="back"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
=======
import "./Loader.css";

const Loader = () =>{
    return (
      <div id="small-overlay">
        <div className="small-loader"></div>
      </div>
    );
}

export default Loader;
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
