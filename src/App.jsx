import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import HostSection from "./components/HostSection";
import Modal from "./components/Modal";
import PodcastFeed from "./PodcastFeed";

export default function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showHost, setShowHost] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-wrapper">
      {/* ☰ Hamburger (Top Left, Minimal) */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          zIndex: 1000,
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: "bold",
          background: "none",
          border: "none",
          color: "#7B2C3C",
        }}
        aria-label="Open menu"
      >
        ☰
      </div>

      {/* Dropdown menu (absolute under ☰) */}
      {menuOpen && (
  <div
    style={{
      position: "absolute",
      top: 60,
      left: 15,
      zIndex: 19,
      backgroundColor: "#b5e4c7", // 🌿 warm mint green
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "10px 15px",
    }}
  >
    <div
      onClick={() => {
        setShowAbout(true);
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
        setShowHost(true);
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

      {/* Main Content */}
      <Header />
      <PodcastFeed />
      <Footer />

      {/* Modals */}
      <Modal isOpen={showAbout} onClose={() => setShowAbout(false)}>
        <AboutSection />
      </Modal>

      <Modal isOpen={showHost} onClose={() => setShowHost(false)}>
        <HostSection />
      </Modal>
    </div>
  );
}
