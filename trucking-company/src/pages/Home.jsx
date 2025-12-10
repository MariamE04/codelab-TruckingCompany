import truck from "../assets/truck.png.avif";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Trucking Company</h1>

      <div className={styles.imageWrapper}>
        <img src={truck} alt="truck" />
      </div>

      <p className={styles.text}>
          This application is designed to help manage the daily operations of a modern trucking company.
          With this system, administrators can easily keep track of trucks, drivers, and operational details all in one place.
          Whether you're monitoring vehicle specifications, registering new drivers, or updating information about your fleet,
          this platform provides a simple and organized way to manage everything.
          The goal is to make fleet administration more efficient, more transparent, and less time-consuming.
      </p>

        <p>                                                                                                 </p>

      <p className={styles.text}>
       Explore the different sections to learn more about your fleet and team!
     </p>

    </div>
  );
}

export default Home;
