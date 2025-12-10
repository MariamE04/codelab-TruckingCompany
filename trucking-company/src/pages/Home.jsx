import truck from '../assets/truck.png.avif'
import '../styles/home.css'

function Home() {
    return (
        <div>
            <h1>Trucking company</h1>

            <div className="truck">
                <img src={truck} alt="truck" />
            </div>

            <p>
                This application is designed to help manage the daily operations of a modern trucking company.
                With this system, administrators can easily keep track of trucks, drivers, and operational details all in one place.
                Whether you're monitoring vehicle specifications, registering new drivers, or updating information about your fleet,
                this platform provides a simple and organized way to manage everything.
                The goal is to make fleet administration more efficient, more transparent, and less time-consuming.
            </p>

            <p> Explore the different sections to learn more about your fleet and your team!</p>

        </div>
    );
}


export default Home;