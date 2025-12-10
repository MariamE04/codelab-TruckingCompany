import { useState, useEffect } from "react";

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
        <div key={truck.truckId}>
          <h2>{truck.name}</h2>
          <p>Weight: {truck.weight} kg</p>
          <p>Capacity: {truck.capacity} kg</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Trucks;
