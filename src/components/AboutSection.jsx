import React from "react";
import aboutImg from "../assets/podcast-cover.jpg";

export default function AboutSection() {
  return (
    <>
      <img
        src={aboutImg}
        alt="Sanctified & Chilled Cover"
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />
      <h2 style={{ color: "#7B2C3C", marginBottom: "20px" }}>
        About the Podcast
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.6" }}>
        <strong>Sanctified & Chilled</strong> is a soul-nourishing podcast for
        anyone seeking peace, purpose, and a deeper connection with their faith.
        Each episode blends honest conversation, uplifting reflections, and
        sacred space — all wrapped in calm, cozy vibes.
      </p>
      <p style={{ fontSize: "1rem", marginTop: "15px", color: "#555" }}>
        Created with love and intention — just for you.
      </p>
    </>
  );
}
