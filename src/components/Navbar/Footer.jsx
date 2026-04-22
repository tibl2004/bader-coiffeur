import React, { useState } from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapLocationDot,
    faPhone,
    faClock,
    faPaperPlane
  } from "@fortawesome/free-solid-svg-icons";
  
  import {
    faInstagram,
    faFacebook,
    faTiktok
  } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Anfrage gesendet!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>
            BADER <span>COIFFEUR</span>
          </h2>
          <p>
            Premium Barbershop in Zürich – moderne Cuts, präzise Handarbeit
            und ein exklusives Erlebnis.
          </p>

          <div className="socials">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>

  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} />
  </a>

  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTiktok} />
  </a>
</div>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Kontakt</h3>

          <p><FontAwesomeIcon icon={faMapLocationDot} /> Zürich, Schweiz</p>
          <p><FontAwesomeIcon icon={faPhone} /> +41 00 000 00 00</p>
          <p><FontAwesomeIcon icon={faClock} /> Mo–Sa: 09:00 – 20:00</p>

          {/* IMPRESSUM LINK */}
          <NavLink to="/impressum" className="impressum-link">
            Impressum
          </NavLink>
        </div>

        {/* FORM */}
        <div className="footer-form">
          <h3>Anfrage senden</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Dein Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Deine E-Mail"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Deine Nachricht"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} /> Senden
            </button>
          </form>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Bader Coiffeur — Crafted with precision.
      </div>

    </footer>
  );
}

export default Footer;