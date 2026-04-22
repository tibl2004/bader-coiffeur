import React from "react";
import "./Impressum.scss";

function Impressum() {
  return (
    <div className="impressum">

      <div className="impressum-container">

        <h1>Impressum</h1>

        <section>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Bader Coiffeur<br />
            Zürich, Schweiz<br />
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: +41 00 000 00 00<br />
            E-Mail: info@bader-coiffeur.ch
          </p>
        </section>

        <section>
          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            Bader Coiffeur<br />
            Zürich, Schweiz
          </p>
        </section>

        <section>
          <h2>Website Betreiber / Umsetzung</h2>
          <p>
            Diese Website wurde erstellt von:<br />
            <strong>TBS Solutions</strong>
          </p>
        </section>

        <section>
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            wird jedoch keine Gewähr übernommen.
          </p>
        </section>

      </div>

    </div>
  );
}

export default Impressum;