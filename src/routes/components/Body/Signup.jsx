import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Signup() {

  const [userData, setUserData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("User data saved:", userData);
  };

  return (
   
    <section>
      <div className="container">
        <div className="sign-up">
          <img alt="logo" src="/hilink-logo.svg" loading="lazy" width="50%" height="29" />
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="e-mail">
              <input type="tel" id="email" placeholder="Mobile Number or Email" onChange={handleChange}/>
            </div>

            <div className="fullname">
              <input type="text" id="fullname" placeholder="Full Name" onChange={handleChange}/>
            </div>

            <div className="username">
              <input type="text" id="username" placeholder="User Name" onChange={handleChange}/>
            </div>

            <div className="password">
              <input type="password" id="password" placeholder="Password" onChange={handleChange}/>
            </div>

            <Link type="submit" className="btn sign-btn" to={"/"}>Sign up</Link>
          </form>
        </div>
      </div>

      <div className="login-box">
        <span>Have an account?<span><Link to="/Login"> Login</Link></span></span>
      </div>
    </section>
  );
}

export default Signup