import { Link } from "react-router-dom";

function Login() {

  

  return (
    <div className="login-card">
      <div className="login-image">
        <img
          alt="phones"
          loading="lazy"
          width="330"
          height="522"
          src="/phones.webp"
        />
      </div>

      <div>
        <section>
          <div className="container">
            <div className="sign-up">
              <img alt="logo" src="/hilink-logo.svg" loading="lazy" width="50%" height="29" />
            </div>

            <div className="form-container">
              <form>
                <div className="e-mail">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your E-mail"
                  ></input>
                </div>

                <div className="password">
                  <input
                    type="password"
                    id="email"
                    placeholder="Input your password"
                  ></input>
                </div>

                <div className="btn">
                  <Link to={"/"}>Log in</Link>
                </div>

                <div className="pass-forgot">
                  <span>
                    <Link to="/resetPassword">Forgot password?</Link>
                  </span>
                </div>
              </form>
            </div>

          </div>
            <div className="login-box">
              <span>
                {`Don't have an account?`}
                <span>
                  <Link to="/Signup"> Signup</Link>
                </span>
              </span>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Login