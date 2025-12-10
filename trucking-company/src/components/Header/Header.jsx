import { NavLink } from "react-router-dom";
import "./header.css";


const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/trucks" className={({ isActive }) => (isActive ? "active" : "")}>Trucks</NavLink>
          </li>
          <li>
            <NavLink to="/drivers" className={({ isActive }) => (isActive ? "active" : "")}>Drivers</NavLink>
          </li>
           <li>
            <NavLink to="/registerDriver" className={({ isActive }) => (isActive ? "active" : "")}>RegisterDriver</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;