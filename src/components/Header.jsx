import React from "react";
import introImg from "../assets/intro.jpg";
import logoImg from "../assets/logo.png";

export default function Header() {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        marginBottom: "40px",
        backgroundColor: "#ddf1e6",
        padding: "20px",
      }}
    >
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

      {/* ✅ Background Loop Video */}
      <video
        src={`${process.env.PUBLIC_URL}/videos/chill-loop.mp4`}
        autoPlay
        loop
        muted
        playsInline
        style={{
    backgroundColor: "#ddf1e6", // 👈 blend with container
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    opacity: 0.35,
    borderRadius: "12px",
    margin: "10px auto",
    display: "block",
  }}
/>

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
    </div>
  );
}
