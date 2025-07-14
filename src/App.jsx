import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import AboutSection from "./components/AboutSection";
import HostSection from "./components/HostSection";
import Modal from "./components/Modal";
import PodcastFeed from './PodcastFeed';

export default function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showHost, setShowHost] = useState(false);

  return (
    <div className="main-wrapper">
      {/* Top buttons */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: "20px" }}>
        <button className="custom-button" onClick={() => setShowAbout(true)}>ABOUT</button>
        <button className="custom-button" onClick={() => setShowHost(true)}>MEET THE HOST</button>
      </div>

      {/* Main content */}
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
