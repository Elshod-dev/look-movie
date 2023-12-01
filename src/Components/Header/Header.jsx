import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import { Icon } from "../AppStyles";
import { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { GlobalContext } from "../Context/GlobalState.jsx";
function Header() {
  const { state } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
              className="icon-box"
              to={`${state.isLogged ? "/profile" : "/signIn"}`}
            >
              <Icon.UserCircle />
              <span>
                {state.isLogged ? (
                  <Link to="/profile">Profile</Link>
                ) : (
                  <Link to="/signIn">Sign In</Link>
                )}
              </span>
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
