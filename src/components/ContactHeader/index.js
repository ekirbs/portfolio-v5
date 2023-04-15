import React, { useState, useEffect } from 'react';
import "../../assets/css/contactHeaderStyle.css"

export default function ContactHeader() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500);
  }, []);

  return (
    <header id="contact-header" className="contact-header">
      <h1 className="contact-header-name" style={{ opacity: showText ? 1 : 0, transition: "opacity 7s" }}>Contact Info</h1>
    </header>
  );
}