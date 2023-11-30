import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import { Icon } from "../AppStyles";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
function Header({ isSignin }) {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  console.log(isMobile);
  return (
    <div className="container header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
          <span>Look Movie</span>
        </Link>
        <div
          className="header-div"
          style={!show && isMobile ? { display: "none" } : { display: "flex" }}
        >
          <ul>
            <li>
              <NavLink
                onClick={() => {
                  setShow(!show);
                }}
                to="/"
                className="link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setShow(!show);
                }}
                to="/catalog"
                className="link"
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setShow(!show);
                }}
                to="/library"
                className="link"
              >
                My library
              </NavLink>
            </li>
            <Link
              onClick={() => {
                setShow(!show);
              }}
              to="/signIn"
              className="icon-box"
            >
              <Icon.UserCircle />
              <span>{isSignin ? "Profile" : "Sign in"}</span>
            </Link>
          </ul>
        </div>
        {isMobile && (
          <div
            className="header-menu-btn"
            onClick={() => {
              setShow(!show);
            }}
          >
            {!show && <Icon.MenuAltRight />}
            {show && <Icon.Close />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
