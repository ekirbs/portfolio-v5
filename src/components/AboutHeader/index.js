import React, { useState, useEffect } from 'react';
import "../../assets/css/aboutHeaderStyle.css"

export default function AboutHeader() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500);
  }, []);

  return (
    <header id="about" className="about-header">
      <h1 className="about-header-name" style={{ opacity: showText ? 1 : 0, transition: "opacity 7s" }}>About Me</h1>
    </header>
  );
}