import React, { useState } from "react";
// import '';

const Contact = (props) => {
  const [inputs, setInputs] = useState({
    fullnamae: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInputs({...inputs, [e.target.value]:e.target.name});
  };

  const handleSubmit = () => {
    if (true) {
      // props.history.push('/Home')
      props.history.push({
        pathname: "/success",
        state: "testing",
      });
      console.log("checking login props", props);
    }
  };

  return (
    <>
      <div className="login-wrap">
        <div className="login-container">
          <p>Get in touch </p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">Full name</label> */}
              <input
                type="text"
                className="form-control mb-0"
                // placeholder="Full name"
                value=""
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleInputPassword1">Email</label> */}
              <input
                type="email"
                className="form-control mb-0"
                placeholder="Email"
                value=""
                onChange={handleChange}

              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleInputPassword1"></label> */}
              <textarea
                className="form-control mb-0"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Whats on your mind"
                value=""
                on
              ></textarea>
            </div>
            <div className="d-inline-block w-100">
              <button
                type="submit"
                className="btn btn-warning float-right"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
