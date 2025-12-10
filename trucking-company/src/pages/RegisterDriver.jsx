import { useState, useEffect } from "react";
import styles from "../styles/RegisterDriver.module.css";

function RegisterDriver() {
  const [trucks, setTrucks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    license: "",
    phone: "",
    email: "",
    street: "",
    zip: "",
    city: "",
    assignedTruck: "",
    agreeToTerms: false
  });

  useEffect(() => {
    fetch("http://localhost:4000/trucks")
      .then(res => res.json())
      .then(data => setTrucks(data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDriver = {
      name: formData.name,
      license: formData.license,
      phone: formData.phone,
      email: formData.email,
      address: {
        street: formData.street,
        zip: formData.zip,
        city: formData.city
      },
      assignedTruck: formData.assignedTruck ? Number(formData.assignedTruck) : null
    };

    fetch("http://localhost:4000/drivers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDriver)
    })
      .then(res => res.json())
      .then(() => {
        alert("Driver registered successfully!");
        setFormData({
          name: "",
          license: "",
          phone: "",
          email: "",
          street: "",
          zip: "",
          city: "",
          assignedTruck: "",
          agreeToTerms: false
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register New Driver</h1>

      <form onSubmit={handleSubmit} className={styles.form}>

        <label className={styles.label}>Name:</label>
        <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label className={styles.label}>License Number:</label>
        <input className={styles.input} type="text" name="license" value={formData.license} onChange={handleChange} required />

        <label className={styles.label}>Phone Number:</label>
        <input className={styles.input} type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label className={styles.label}>Email:</label>
        <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label className={styles.label}>Street Address:</label>
        <input className={styles.input} type="text" name="street" value={formData.street} onChange={handleChange} required />

        <label className={styles.label}>ZIP Code:</label>
        <input className={styles.input} type="text" name="zip" value={formData.zip} onChange={handleChange} required />

        <label className={styles.label}>City:</label>
        <input className={styles.input} type="text" name="city" value={formData.city} onChange={handleChange} required />

        <label className={styles.label}>Assigned Truck:</label>
        <select className={styles.select} name="assignedTruck" value={formData.assignedTruck} onChange={handleChange}>
          <option value="">Select a Truck</option>
          {trucks.map(truck => (
            <option key={truck.truckId} value={truck.truckId}>{truck.name}</option>
          ))}
        </select>

        <label className={styles.checkboxContainer}>
          <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} required />
          I agree to the terms and conditions
        </label>

        <button className={styles.button} type="submit">Register Driver</button>
      </form>
    </div>
  );
}

export default RegisterDriver;
