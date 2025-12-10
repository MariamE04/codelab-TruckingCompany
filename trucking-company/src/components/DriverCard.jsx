import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DriverCard() {
  const { driverId } = useParams(); 
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    if (!driverId) return;

    fetch(`http://localhost:4000/drivers?driverId=${driverId}`)
      .then(res => res.json())
      .then(data => setDriver(data[0])) 
      .catch(err => console.error(err));
  }, [driverId]);

  if (!driver) return <p>Loading...</p>;

  return (
    <div>
      <h1>{driver.name}</h1>
      <img src={driver.image} alt={driver.name} width="150" />

      
      <p><strong>License:</strong> {driver.license}</p>
      <p><strong>Phone:</strong> {driver.phone}</p>
      <p><strong>Email:</strong> {driver.email}</p>
      <p><strong>Address:</strong> {driver.address.street}, {driver.address.zip} {driver.address.city}</p>
    </div>
  );
}

export default DriverCard;
