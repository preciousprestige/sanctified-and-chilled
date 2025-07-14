import React, { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaEnvelope, FaSpotify, FaApple } from "react-icons/fa";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: "Europe/Budapest", hour: "2-digit", minute: "2-digit" };
      const formatter = new Intl.DateTimeFormat([], options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer">
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/sanctifiedandchilledpodcast?igsh=N3RqMXJpZ3kxamRt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://open.spotify.com/show/1aLL6CrMQuGNcqFXj31MiN?utm_medium=share&utm_source=linktree"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/sanctified-and-chilled/id1794278402"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaApple />
        </a>
        <a href="https://www.youtube.com/@eddyiseh" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="mailto:sanctifiedandchilled@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p style={{ marginTop: "15px" }}> {time}</p>
      <p>© 2025 Sanctified & Chilled Podcast</p>
    </div>
  );
}
