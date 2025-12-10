import { useState, useEffect } from "react";

function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/drivers")
      .then(res => res.json())
      .then(data => setDrivers(data));
  }, []);

  return (
    <div>
      <h1>All Drivers</h1>

      {drivers.map(driver => (
        <div key={driver.driverId}>
          <h2>Name: {driver.name}</h2>

          <p><strong>License:</strong> {driver.license}</p>
          <p><strong>Phone:</strong> {driver.phone}</p>
          <p><strong>Email:</strong> {driver.email}</p>

          <p><strong>Address:</strong> {driver.address.street}, {driver.address.zip} {driver.address.city}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Drivers;
