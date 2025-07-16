import React, { useState } from "react";
import logoImg from "../assets/logo.png";

export default function Header({ onSelectSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        marginBottom: "40px",
        backgroundColor: "#ddf1e6",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {/* 🍔 Hamburger */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: "bold",
          zIndex: 10,
          backgroundColor: "transparent",
        }}
      >
        ☰
      </div>

      {/* 📖 Dropdown Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 55,
            left: 15,
            backgroundColor: "#7B2C3C", // maroon
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            zIndex: 10,
            padding: "10px 15px",
          }}
        >
          <div
            onClick={() => {
              onSelectSection("about");
              setMenuOpen(false);
            }}
            style={{
              padding: "8px 0",
              cursor: "pointer",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            About
          </div>
          <div
            onClick={() => {
              onSelectSection("host");
              setMenuOpen(false);
            }}
            style={{
              padding: "8px 0",
              cursor: "pointer",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            Meet the Host
          </div>
        </div>
      )}

      {/* 🔁 Video Background + Glowing S & C */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <video
          src={`${process.env.PUBLIC_URL}/videos/chill-loop.mp4`}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
            background: "transparent",
            zIndex: 1,
          }}
        />
        {/* ✨ Glowing S & C */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#b5e4c7", // warm mint green
            fontWeight: "bold",
            fontSize: "2.5rem",
            textShadow: "0 0 8px #b5e4c7, 0 0 20px #b5e4c7",
            animation: "glow 2.5s ease-in-out infinite alternate",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          S & C
        </div>
      </div>

      {/* ✅ Circular Logo Image */}
      <img
        src={logoImg}
        alt="Podcast Logo"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          marginTop: "15px",
          marginBottom: "10px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* ✅ Heart Icon */}
      <p style={{ fontStyle: "italic", color: "#7B2C3C" }}>♡</p>

      {/* 🔁 Glowing Animation */}
      <style>
        {`
          @keyframes glow {
            from {
              text-shadow: 0 0 4px #b5e4c7;
              transform: translate(-50%, -50%) scale(1);
            }
            to {
              text-shadow: 0 0 20px #b5e4c7, 0 0 30px #b5e4c7;
              transform: translate(-50%, -50%) scale(1.05);
            }
          }
        `}
      </style>
    </div>
  );
}
