import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";

import Services from "./components/Service/Services";
import About from "./components/UeberUns/About";
import Home from "./components/Landingpage/Home";
import Booking from "./Termin/Booking";
import Locations from "./components/UeberUns/Locations";
import Footer from "./components/Navbar/Footer";
import Impressum from "./components/UeberUns/Impressum";
import Frisuren from "./components/Service/Frisuren";
import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/styles" element={<Frisuren />} />
        <Route path="/login" element={<LoginForm />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;