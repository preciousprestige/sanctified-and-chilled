// src/components/AboutButton.jsx
import React from "react";

export default function AboutButton() {
  return (
    <a
      href="#about"
      style={{
        backgroundColor: "#ddf1e6",
        color: "#7B2C3C",
        padding: "8px 16px",
        borderRadius: "20px",
        fontWeight: "bold",
        textDecoration: "none",
        fontSize: "14px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      ABOUT
    </a>
  );
}
