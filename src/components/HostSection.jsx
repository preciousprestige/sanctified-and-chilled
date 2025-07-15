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
        <strong>Hi, I’m edidiong iseh</strong> — most people just call me Deedee—the heart and voice behind the S&C Pod.

My mission is simple and powerful: helping this generation put Christ at the center, where He belongs. I’m all about abolishing mundane culture and replacing it with real, Christ-centered truth.

When I’m not recording episodes, you’ll probably find me buried in a good book, listening to music (or singing along), creating content, or casually offering what some call “unofficial therapy sessions.”

Oh, and yes—I am funny. But don’t just take my word for it… tune in and see for yourself!

I’m so glad you’re here. Welcome to this little godly corner of the internet—where we’re doing life with purpose, together.

With love,
Deedee.
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
