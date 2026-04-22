import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignInAlt,
  faSignOutAlt,
  faBars,
  faImage,
  faCalendarAlt,
  faCut,
  faUser,
  faMapLocationDot
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Navbar.scss";

function Navbar() {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoUrl, setLogoUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-langhaus-backend.onrender.com/api/logo"
        );
        setLogoUrl(response.data.logoUrl || null);
      } catch (err) {
        console.error("Fehler beim Laden des Logos:", err);
      }
    };
    fetchLogo();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        burgerMenuActive &&
        !e.target.closest(".navbar-container") &&
        !e.target.closest(".menu-icon")
      ) {
        setBurgerMenuActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [burgerMenuActive]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className={`navbar ${burgerMenuActive ? "active" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <div className="logo-box">
          <NavLink to="/" onClick={() => setBurgerMenuActive(false)}>
            {logoUrl ? (
              <img src={logoUrl} alt="Logo" className="logo" />
            ) : (
              <span className="logo-placeholder">BADER COIFFEUR</span>
            )}
          </NavLink>
        </div>

        {/* BURGER */}
        <div
          className="menu-icon"
          onClick={() => setBurgerMenuActive(!burgerMenuActive)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* NAV */}
        <ul className={`nav-items ${burgerMenuActive ? "open" : ""}`}>

          <NavItem to="/" text="Home" icon={faHome} setBurgerMenuActive={setBurgerMenuActive} />

          <NavItem 
            to="/booking" 
            text="Termin buchen" 
            icon={faCalendarAlt} 
            setBurgerMenuActive={setBurgerMenuActive}
            isCTA={true}
          />

          <NavItem 
            to="/services" 
            text="Services & Preise" 
            icon={faCut} 
            setBurgerMenuActive={setBurgerMenuActive} 
          />

          <NavItem 
            to="/styles" 
            text="Styles" 
            icon={faImage} 
            setBurgerMenuActive={setBurgerMenuActive} 
          />

          {/* ✅ NEU: STANDORTE */}
          <NavItem 
            to="/locations" 
            text="Standorte" 
            icon={faMapLocationDot} 
            setBurgerMenuActive={setBurgerMenuActive} 
          />

          <NavItem 
            to="/about" 
            text="Über uns" 
            icon={faUser} 
            setBurgerMenuActive={setBurgerMenuActive} 
          />

          {/* LOGIN / LOGOUT */}
          {!isLoggedIn ? (
            <NavItem 
              to="/login" 
              text="Login" 
              icon={faSignInAlt} 
              setBurgerMenuActive={setBurgerMenuActive} 
            />
          ) : (
            <li>
              <button className="nav-link logout" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

function NavItem({ to, text, icon, setBurgerMenuActive, isCTA }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-link ${isActive ? "active" : ""} ${isCTA ? "cta" : ""}`
        }
        onClick={() => setBurgerMenuActive(false)}
      >
        <FontAwesomeIcon icon={icon} className="icon" /> {text}
      </NavLink>
    </li>
  );
}

export default Navbar;