import React from "react";
import "./Locations.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

function Locations() {
  return (
    <div className="locations-page">

      <h1 className="page-title">Unsere Standorte</h1>
      <p className="page-subtitle">
        Besuche uns in einem unserer zwei Barbershops in Zürich.
      </p>

      <div className="location-grid">

        {/* LOCATION 1 */}
        <div className="location-card">
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033"
            alt="Zürich City Barber"
            className="location-img"
          />

          <h2>
            <FontAwesomeIcon icon={faMapLocationDot} /> Zürich City
          </h2>

          <p>Bahnhofstrasse 100, 8001 Zürich</p>

          <p>
            <FontAwesomeIcon icon={faClock} /> Mo–Sa: 09:00 – 19:00
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="location-btn"
          >
            Route öffnen
          </a>
        </div>

        {/* LOCATION 2 */}
        <div className="location-card">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
            alt="Oerlikon Barber"
            className="location-img"
          />

          <h2>
            <FontAwesomeIcon icon={faMapLocationDot} /> Oerlikon
          </h2>

          <p>Schaffhauserstrasse 350, 8050 Zürich</p>

          <p>
            <FontAwesomeIcon icon={faClock} /> Mo–Sa: 10:00 – 20:00
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="location-btn"
          >
            Route öffnen
          </a>
        </div>

      </div>
    </div>
  );
}

export default Locations;