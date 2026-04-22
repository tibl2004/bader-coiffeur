import React, { useState } from "react";
import "./Frisuren.scss";

function Frisuren() {
  const [category, setCategory] = useState("all");

  const [images] = useState([
    {
      id: 1,
      title: "Long Layers",
      type: "women",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    {
      id: 2,
      title: "Blunt Bob",
      type: "women",
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      id: 3,
      title: "Curtain Bangs",
      type: "women",
      url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
    },
    {
      id: 4,
      title: "Fade Cut (Men)",
      type: "men",
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033"
    },
    {
      id: 5,
      title: "Soft Waves",
      type: "women",
      url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e"
    }
  ]);

  const filtered =
    category === "all"
      ? images
      : images.filter((img) => img.type === category);

  return (
    <div className="frisuren">

      <div className="frisuren-header">
        <h1>Unsere Frisuren</h1>
        <p>Frauen & Männer Styles von Bader Coiffeur</p>
      </div>

      {/* FILTER */}
      <div className="filter">
        <button onClick={() => setCategory("all")}>Alle</button>
        <button onClick={() => setCategory("women")}>Frauen</button>
        <button onClick={() => setCategory("men")}>Männer</button>
      </div>

      {/* GRID */}
      <div className="grid">
        {filtered.map((img) => (
          <div key={img.id} className="card">
            <img src={img.url} alt={img.title} />
            <div className="overlay">
              <h3>{img.title}</h3>
              <span>{img.type === "women" ? "Frauen Style" : "Männer Style"}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Frisuren;