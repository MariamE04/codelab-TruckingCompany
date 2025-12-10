import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        <NavLink to="/trucks" className={styles.link}>Trucks</NavLink>
        <NavLink to="/drivers" className={styles.link}>Drivers</NavLink>
        <NavLink to="/registerDriver" className={styles.link}>Register Driver</NavLink>
      </nav>
    </header>
  );
}

export default Header;
