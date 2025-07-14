import React from "react";

export default function AboutSection() {
  return (
    <div>
      <img
        src={require("../assets/podcast-cover.jpg")}
        alt="Sanctified & Chilled Cover"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
      <h2 style={{ color: "#7B2C3C", marginBottom: "20px" }}>About the Podcast</h2>
      <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.6" }}>
        <strong>Sanctified & Chilled</strong> is a safe space to acknowledge Christ and address issues in Christianity in our contemporary society. Raw truths, sometimes uncomfortable will be heard. Each episode blends honest conversation, authenticity in the word of God, and a sacred space — all wrapped in calm, cozy vibes.
      </p>
      <p style={{ fontSize: "1rem", marginTop: "15px", color: "#555" }}>
        Created with love and intention — just for you.
      </p>
    </div>
  );
}
