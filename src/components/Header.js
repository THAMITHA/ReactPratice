import { LOGO_URL } from "../constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  useEffect(() => {
    console.log("useeffect called");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logoimage" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
          <li>cart</li>
          <button
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
