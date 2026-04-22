import React from "react";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScissors,
  faCalendarAlt,
  faStar,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>
            BADER <span>COIFFEUR</span>
          </h1>

          <p>
            Dein Premium Barbershop für moderne Schnitte, perfekte Styles
            und echte Handwerkskunst.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              <FontAwesomeIcon icon={faCalendarAlt} /> Termin buchen
            </button>

            <button className="btn-secondary">
              Unsere Services
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-box">
          <FontAwesomeIcon icon={faUsers} />
          <h3>10’000+</h3>
          <p>Kunden</p>
        </div>

        <div className="stat-box">
          <FontAwesomeIcon icon={faStar} />
          <h3>4.9</h3>
          <p>Bewertung</p>
        </div>

        <div className="stat-box">
          <FontAwesomeIcon icon={faScissors} />
          <h3>100%</h3>
          <p>Präzision</p>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="info">
        <div className="info-card">
          <h2>Ohne Termin willkommen</h2>
          <p>
            Du kannst jederzeit vorbeikommen – wir sind auch für Walk-ins da.
          </p>
        </div>

        <div className="info-card highlight">
          <h2>Premium Styling</h2>
          <p>
            Moderne Techniken, präzise Schnitte und individuelle Beratung.
          </p>
        </div>

        <div className="info-card">
          <h2>Damen & Herren</h2>
          <p>
            Wir bieten komplette Haarpflege für alle Styles.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;