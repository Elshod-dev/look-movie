import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import { Icon } from "../AppStyles";

function Header({ isSignin }) {
  return (
    <div className="container header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
          <span>Look Movie</span>
        </Link>
        <ul>
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className="link">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" className="link">
              My library
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <Link to="/signIn" className="icon-box">
          <Icon.UserCircle />
          <span>{isSignin ? "Profile" : "Sign in"}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
