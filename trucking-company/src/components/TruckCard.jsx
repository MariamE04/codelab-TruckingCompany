import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import placeholderTruck from "../assets/truck-placeholder.jpg"
import styles from "../styles/TruckCard.module.css";

function TruckCard() {  
  const { truckId } = useParams(); 
  const [truck, setTruck] = useState(null);

  useEffect(() => {
    if (!truckId) return;

    fetch(`http://localhost:4000/trucks?truckId=${truckId}`)
      .then(res => res.json())
      .then(data => setTruck(data[0]))  // data[0], fordi json-server returnerer et array
      .catch(err => console.error(err));
  }, [truckId]);

  if (!truck) return <p>Loading...</p>;

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{truck.name}</h1>
      <img className={styles.image} src={truck.image || placeholderTruck} alt={truck.name} width="200" />
      <p><strong>Model:</strong> {truck.model}</p>
      <p><strong>Capacity:</strong> {truck.capacity} kg</p>
      <p><strong>Max Speed:</strong> {truck.maxSpeed} km/h</p>
      <p><strong>Weight:</strong> {truck.weight} kg</p>
      <p><strong>Length:</strong> {truck.length} m</p>
    </div>
  );
}

export default TruckCard;
