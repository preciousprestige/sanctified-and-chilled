import React from "react";

export default function EpisodeCard({ episode }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "20px",
        marginBottom: "30px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src={episode.image}
        alt={episode.title}
        style={{ width: "100%", borderRadius: "14px", marginBottom: "15px" }}
      />
      <h3 style={{ color: "#7B2C3C" }}>{episode.title}</h3>
      <p>{episode.description}</p>
      <a href={episode.link} target="_blank" rel="noopener noreferrer">
        <button className="custom-button">Listen Now</button>
      </a>
    </div>
  );
}
