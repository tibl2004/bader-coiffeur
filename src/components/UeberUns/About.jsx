import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScissors,
  faStar,
  faUsers,
  faAward
} from "@fortawesome/free-solid-svg-icons";

const team = [
  {
    name: "Marco",
    role: "Master Barber",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Luca",
    role: "Stylist & Color Expert",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    name: "Sara",
    role: "Senior Stylistin",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  }
];

function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* HERO */}
        <div className="about-hero">
          <h1>Über Bader Coiffeur</h1>
          <p>
            Präzision, Stil und Leidenschaft – seit Jahren dein
            Premium Coiffeur für Damen & Herren.
          </p>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="stat">
            <FontAwesomeIcon icon={faUsers} />
            <h3>10’000+</h3>
            <p>Kunden</p>
          </div>

          <div className="stat">
            <FontAwesomeIcon icon={faStar} />
            <h3>4.9</h3>
            <p>Bewertung</p>
          </div>

          <div className="stat">
            <FontAwesomeIcon icon={faAward} />
            <h3>10+</h3>
            <p>Jahre Erfahrung</p>
          </div>

          <div className="stat">
            <FontAwesomeIcon icon={faScissors} />
            <h3>100%</h3>
            <p>Passion</p>
          </div>
        </div>

        {/* STORY */}
        <div className="story">
          <h2>Unsere Geschichte</h2>
          <p>
            Bader Coiffeur steht für moderne Haarkunst, präzise Schnitte
            und individuelle Beratung. Unser Ziel ist es, dass jeder Kunde
            den Salon mit einem perfekten Look und einem guten Gefühl verlässt.
          </p>
        </div>

        {/* TEAM */}
        <h2 className="team-title">Unser Team</h2>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="img-box">
                <img src={member.img} alt={member.name} />
              </div>

              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;