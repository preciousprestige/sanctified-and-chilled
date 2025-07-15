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

  const handleSelectSection = (section) => {
    if (section === "about") setShowAbout(true);
    if (section === "host") setShowHost(true);
  };

  return (
    <div className="main-wrapper">
      <Header onSelectSection={handleSelectSection} />
      <PodcastFeed />
      <Footer />

      <Modal isOpen={showAbout} onClose={() => setShowAbout(false)}>
        <AboutSection />
      </Modal>

      <Modal isOpen={showHost} onClose={() => setShowHost(false)}>
        <HostSection />
      </Modal>
    </div>
  );
}
