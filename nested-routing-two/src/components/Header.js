import logo from "../images/react-router-color.png";
import { Link, NavLink } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <header id="header">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
