import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Drivers.module.css";

function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("/api/drivers")
      .then(res => res.json())
      .then(data => setDrivers(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>All Drivers</h1>

      <div className={styles.grid}>
        {drivers.map(driver => (
          <div key={driver.driverId} className={styles.card}>
            <h2>
              <NavLink to={`/drivers/${driver.driverId}`}>{driver.name}</NavLink>
            </h2>

            <p><strong>License:</strong> {driver.license}</p>
            <p><strong>Phone:</strong> {driver.phone}</p>
            <p><strong>Email:</strong> {driver.email}</p>

            <p>
              <strong>Address:</strong>
              {" "}
              {driver.address.street}, {driver.address.zip} {driver.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drivers;
