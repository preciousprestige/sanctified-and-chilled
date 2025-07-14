// src/components/Modal.jsx
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.close} onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "30px",
    width: "90%",
    maxWidth: "600px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    position: "relative",
    textAlign: "center",
  },
  close: {
    position: "absolute",
    top: "12px",
    right: "16px",
    fontSize: "22px",
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#7B2C3C",
  }
};
