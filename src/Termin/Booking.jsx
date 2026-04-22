import React, { useState } from "react";
import "./Booking.scss";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: ""
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectService = (value) => {
    setForm({ ...form, service: value });
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Termin angefragt ✔️");
    console.log(form);
  };

  return (
    <div className="booking">

      <div className="booking-container">

        {/* LEFT INFO */}
        <div className="booking-info">
          <h1>Termin buchen</h1>
          <p>
            Buche deinen Termin online oder komm spontan vorbei.
            Wir sind auch für Walk-ins da ✂️
          </p>

          <div className="info-box">
            <h3>💎 Premium Service</h3>
            <p>Haarschnitt, Bartpflege & Styling auf höchstem Niveau.</p>
          </div>

          <div className="info-box highlight">
            <h3>⏱️ Schnell & einfach</h3>
            <p>Wähle Datum, Zeit und Service – wir kümmern uns um den Rest.</p>
          </div>
        </div>

        {/* FORM */}
        <form className="booking-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Dein Name"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Telefonnummer"
            onChange={handleChange}
            required
          />

          {/* CUSTOM DROPDOWN */}
          <div className="dropdown">

            <div
              className="dropdown-selected"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {form.service || "Service wählen"}
            </div>

            {dropdownOpen && (
              <div className="dropdown-list">
                <div onClick={() => selectService("Herren Haarschnitt")}>
                  Herren Haarschnitt
                </div>
                <div onClick={() => selectService("Damen Haarschnitt")}>
                  Damen Haarschnitt
                </div>
                <div onClick={() => selectService("Bartpflege")}>
                  Bartpflege
                </div>
                <div onClick={() => selectService("Premium Paket")}>
                  Premium Paket
                </div>
              </div>
            )}

          </div>

          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Termin bestätigen
          </button>

        </form>

      </div>
    </div>
  );
}

export default Booking;