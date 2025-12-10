import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx"; 
import Trucks from "./pages/Trucks.jsx";
import Drivers from "./pages/Drivers.jsx";
import RegisterDriver from "./pages/RegisterDriver.jsx"
import DriverCard from "./components/DriverCard.jsx";
import TruckCard from "./components/TruckCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="trucks" element={<Trucks />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="registerDriver" element={<RegisterDriver />} />
        <Route path="drivers/:driverId" element={<DriverCard />} /> 
        <Route path="trucks/:truckId" element={<TruckCard />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);
