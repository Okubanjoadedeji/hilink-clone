
function Header() {
  return (
    <nav>
      <a className="logo" href="/">
        <img alt="logo" src="/hilink-logo.svg" />
      </a>

      <ul>
        <a className="links" href="/">Home</a>
        <a className="links" href="/">How Hilink Works</a>
        <a className="links" href="/">Services</a>
        <a className="links" href="/">Pricing</a>
        <a className="links" href="/">Contact us</a>
      </ul>

      <div className="">
        <button className="" type="button">
          <img alt="Login" loading="lazy" width="24" height="24" src="/user.svg" />
            <span className="">Login</span>
        </button>
      </div>

      <img alt="menu" loading="lazy" width="32" height="32" className="menu" src="/menu.svg" />
    </nav>
  );
}

export default Header