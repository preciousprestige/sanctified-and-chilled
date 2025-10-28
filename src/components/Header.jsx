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
      {/* 🍔 Animated Hamburger */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          cursor: "pointer",
          width: "30px",
          height: "24px",
          zIndex: 100,
        }}
      >
        {/* Top line */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "3px",
            backgroundColor: "#7B2C3C",
            borderRadius: "2px",
            transition: "all 0.4s ease",
            transform: menuOpen
              ? "rotate(45deg) translateY(10px)"
              : "rotate(0deg) translateY(0)",
          }}
        />
        {/* Middle line */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "3px",
            backgroundColor: "#7B2C3C",
            borderRadius: "2px",
            top: "10px",
            opacity: menuOpen ? 0 : 1,
            transition: "all 0.3s ease",
          }}
        />
        {/* Bottom line */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "3px",
            backgroundColor: "#7B2C3C",
            borderRadius: "2px",
            top: "20px",
            transition: "all 0.4s ease",
            transform: menuOpen
              ? "rotate(-45deg) translateY(-10px)"
              : "rotate(0deg) translateY(0)",
          }}
        />
      </div>

      {/* 📖 Slide & Fade Menu (like DHL, not full screen) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: menuOpen ? "0" : "-220px",
          height: "100%",
          width: "220px",
          backgroundColor: "rgba(123,44,60,0.25)", // translucent maroon
          backdropFilter: "blur(10px)",
          borderBottomRightRadius: "15px",
          borderTopRightRadius: "15px",
          boxShadow: menuOpen
            ? "4px 0 10px rgba(0,0,0,0.15)"
            : "0 0 0 rgba(0,0,0,0)",
          transition: "left 0.4s ease, opacity 0.4s ease",
          opacity: menuOpen ? 1 : 0,
          zIndex: 50,
          animation: menuOpen ? "fadeIn 0.4s ease" : "none",
        }}
      >
        <div
          style={{
            padding: "70px 25px 30px 25px",
            textAlign: "left",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateX(0)" : "translateX(-25px)",
            transition: "all 0.4s ease",
          }}
        >
          <div
            onClick={() => {
              onSelectSection("about");
              setMenuOpen(false);
            }}
            style={{
              padding: "12px 0",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              transition: "opacity 0.3s ease",
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
              padding: "12px 0",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              transition: "opacity 0.3s ease",
            }}
          >
            Meet the Host
          </div>
        </div>
      </div>

      {/* ✅ Larger Circular Logo */}
      <img
        src={logoImg}
        alt="Podcast Logo"
        style={{
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          marginTop: "15px",
          marginBottom: "10px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: 10,
        }}
      />

      {/* ✨ Deep & Glowing S & C */}
      <div
        style={{
          color: "#012a28",
          fontWeight: "900",
          fontSize: "3rem",
          letterSpacing: "0.1rem",
          textShadow: "0 0 10px #b5e4c7, 0 0 25px #b5e4c7, 0 0 40px #b5e4c7",
          animation: "glow 2.5s ease-in-out infinite alternate",
          zIndex: 5,
        }}
      >
        S & C
      </div>

      {/* ✅ Heart Icon */}
      <p style={{ fontStyle: "italic", color: "#7B2C3C" }}>♡</p>

      {/* 🔁 Animations */}
      <style>
        {`
          @keyframes glow {
            from {
              text-shadow: 0 0 6px #b5e4c7;
              transform: scale(1);
            }
            to {
              text-shadow: 0 0 20px #b5e4c7, 0 0 40px #b5e4c7;
              transform: scale(1.05);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}
