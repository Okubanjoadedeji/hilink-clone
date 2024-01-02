import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleNavs = () => {
    setIsVisible(!isVisible);
  };

  return (
  
    <nav>
      <a className="logo" href="/">
        <img alt="logo" src="/hilink-logo.svg" loading="lazy" width="74" height="29" />
      </a>

      <ul className="navlinks">
        <a className="links" href="/">Home</a>
        <a className="links" href="/">How Hilink Works?</a>
        <a className="links" href="/">Services</a>
        <a className="links" href="/">Pricing</a>
        <a className="links" href="/">Contact us</a>
      </ul>

      <div className="login-contr">
        <Link className="login-btn" to={"/Login"}> <img alt="Login" loading="lazy" width="24" height="24" src="/user.svg" /> Login</Link>
      </div>

      <div className="h-nav">
        <button onClick={toggleNavs}>
        <img alt="menu" loading="lazy" width="32" height="32" className="menu" src="/menu.svg"/>
        </button>
        { isVisible &&(
          <>
            <ul className="h-navlinks">
              <div className="nav-t">
                <span>Navigation</span>
                <button  onClick={toggleNavs}>
                  <img alt="close" loading="lazy" width="32" height="32" src="/close.svg"/>
                </button>
              </div>
              
              <a className="h-links" href="/">Home</a>
              <a className="h-links" href="/">How Hilink Works?</a>
              <a className="h-links" href="/">Services</a>
              <a className="h-links" href="/">Pricing</a>
              <a className="h-links" href="/">Contact us</a>

                <button className="h-login-btn" type="button">
                  <Link to={"/Login"}>Log out</Link>
                </button>
            </ul>


            <div className="cover-bg" ></div>
          </>
        )}
      </div>

    </nav>

  );
}

export default Header