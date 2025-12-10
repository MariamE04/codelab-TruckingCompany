import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Trucks() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/trucks")
      .then(res => res.json())
      .then(data => setTrucks(data));
  }, []);

  return (
     <div>
      <h1>All Trucks</h1>

      {trucks.map(truck => (
        <div key={truck.truckId} className="truck-card">
          <h2>
            <NavLink to={`/trucks/${truck.truckId}`}>{truck.name}</NavLink>
          </h2>
          <p><strong>Weight:</strong> {truck.weight} kg</p>
          <p><strong>Capacity:</strong> {truck.capacity} kg</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Trucks;
