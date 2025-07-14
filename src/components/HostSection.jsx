// src/components/HostSection.jsx
import React from "react";
import hostImg from "../assets/host.jpg";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function HostSection() {
  return (
    <>
      <h2 style={{ color: "#7B2C3C", marginBottom: "25px" }}>Meet the Host</h2>
      <img
        src={hostImg}
        alt="Podcast Host"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />
      <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.6" }}>
        <strong>Hi, I’m edidiongiseh</strong> — the heart behind the <em>Sanctified & Chilled pod</em>.
        I’m passionate about creating safe, soulful spaces to explore faith, healing, and 
        everything in between. This podcast is an invitation to breathe, grow, and be real.
      </p>
      <div style={{ marginTop: "20px", fontSize: "22px", display: "flex", justifyContent: "center", gap: "25px" }}>
        <a href="https://www.instagram.com/edidiongiseh?igsh=ZWZmenZyNjRkYzBq&utm_source=qr" target="_blank" rel="noreferrer">
          <FaInstagram color="#7B2C3C" />
        </a>
        <a href="mailto:sanctifiedandchilled@gmail.com">
          <FaEnvelope color="#7B2C3C" />
        </a>
        <a href="https://www.youtube.com/@eddyiseh" target="_blank" rel="noreferrer">
          <FaYoutube color="#7B2C3C" />
        </a>
      </div>
    </>
  );
}
