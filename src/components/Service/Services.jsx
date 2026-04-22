import React from "react";
import "./Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCut,
  faUser,
  faCrown,
  faVenus,
  faMars,
  faClock
} from "@fortawesome/free-solid-svg-icons";

const womenServices = [
  {
    title: "Haare schneiden",
    price: "CHF 27",
    icon: faVenus,
    description: "Individueller Schnitt inkl. Beratung & Pflege."
  },
  
  {
    title: "Waschen",
    price: "CHF 10",
    icon: faCut,
    description: "Reinigung & Pflege für gesundes Haar."
  }
];

const hairProducts = [
  {
    title: "Haarprodukte",
    price: "CHF 10",
    icon: faCrown,
    description: "Gel, Wachs & Stylingprodukte."
  }
];

const menServices = [
  {
    title: "Haare schneiden",
    price: "CHF 20",
    icon: faMars,
    description: "Sauberer Schnitt, modern oder klassisch."
  },
  {
    title: "Rasieren",
    price: "CHF 15",
    icon: faUser,
    description: "Konturen, Pflege & perfektes Finish."
  },
  {
    title: "Waschen",
    price: "CHF 7",
    icon: faCut,
    description: "Reinigung & Pflege für Kopfhaut und Haar."
  },
  {
    title: "Haare schneiden & Rasieren",
    price: "CHF 35",
    icon: faCrown,
    description: "Komplettpaket für den perfekten Look."
  }
];

function Services() {
  return (
    <section className="services">
      <div className="services-container">

        <h1 className="title">Unsere Services</h1>
        <p className="subtitle">
          Perfektion für Damen & Herren – ganz ohne Termin möglich
        </p>

        {/* WALK-IN INFO */}
        <div className="walkin-box">
          <FontAwesomeIcon icon={faClock} />
          <span>Walk-ins willkommen – komm einfach vorbei!</span>
        </div>

        {/* DAMEN */}
        <div className="category">
          <h2 className="category-title">Für Damen</h2>
          <div className="services-grid">
            {womenServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* HERREN */}
        <div className="category">
          <h2 className="category-title">Für Herren</h2>
          <div className="services-grid">
            {menServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* PRODUKTE */}
        <div className="category">
          <h2 className="category-title">Produkte</h2>
          <div className="services-grid">
            {hairProducts.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="icon-box">
        <FontAwesomeIcon icon={service.icon} />
      </div>

      <h3>{service.title}</h3>
      <p className="description">{service.description}</p>

      <div className="price">{service.price}</div>

      <button
        className="book-btn"
        onClick={() => alert("Online Buchung kommt bald 😉")}
      >
        Termin buchen
      </button>
    </div>
  );
}

export default Services;