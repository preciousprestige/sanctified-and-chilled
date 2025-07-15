import React, { useState } from "react";
import introImg from "../assets/intro.jpg";
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
        overflow: "hidden", // ensures overlay stays inside
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
            backgroundColor: "#b5e4c7", // warm mint green
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
              color: "#7B2C3C",
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
              color: "#7B2C3C",
              fontWeight: "bold",
            }}
          >
            Meet the Host
          </div>
        </div>
      )}

      {/* ✅ S & C Label */}
      <p
        style={{
          marginBottom: "6px",
          fontWeight: "bold",
          color: "#7B2C3C",
          fontSize: "1.1rem",
        }}
      >
        S & C
      </p>

      {/* ✅ Logo */}
      <img
        src={logoImg}
        alt="Podcast Logo"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          marginBottom: "10px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* ✅ Background Video with Overlay */}
      <div style={{ position: "relative", maxWidth: "300px", margin: "10px auto" }}>
        <video
          src={`${process.env.PUBLIC_URL}/videos/chill-loop.mp4`}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#ddf1e6",
            opacity: 0.35,
            display: "block",
          }}
        />
        {/* ✅ Texture Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 4px)",
            animation: "moveOverlay 10s linear infinite",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ✅ Title */}
      <h1 style={{ marginTop: "10px", color: "#7B2C3C" }}>
        Sanctified & Chilled
      </h1>
      <p style={{ fontStyle: "italic", color: "#7B2C3C" }}>♡</p>

      {/* ✅ Intro Section */}
      <div
        style={{
          backgroundColor: "#ddf1e6",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={introImg}
          alt="Intro"
          style={{
            width: "100%",
            borderRadius: "16px",
            marginBottom: "20px",
          }}
        />
        <p
          style={{
            fontSize: "1.1rem",
            color: "#7B2C3C",
            textAlign: "center",
          }}
        >
          Welcome to the Sanctified & Chilled podcast — where peace meets
          purpose. Listen to faith-filled stories, honest moments, and uplifting
          conversations.
        </p>
      </div>

      {/* 🔁 Texture Animation */}
      <style>
        {`
          @keyframes moveOverlay {
            from { background-position: 0 0; }
            to { background-position: 100% 100%; }
          }
        `}
      </style>
    </div>
  );
}
