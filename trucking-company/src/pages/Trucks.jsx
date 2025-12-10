import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Trucks.module.css";

function Trucks() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/trucks")
      .then(res => res.json())
      .then(data => setTrucks(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>All Trucks</h1>

      <div className={styles.grid}>
        {trucks.map(truck => (
          <div key={truck.truckId} className={styles.card}>
            <h2>
              <NavLink to={`/trucks/${truck.truckId}`}>{truck.name}</NavLink>
            </h2>
            <p><strong>Weight:</strong> {truck.weight} kg</p>
            <p><strong>Capacity:</strong> {truck.capacity} kg</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trucks;
