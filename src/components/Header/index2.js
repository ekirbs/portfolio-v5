import React, { useState, useEffect } from 'react';
import "../../assets/css/headerStyle2.css"

export default function Header() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500);
  }, []);

  return (
    <header id="top" className="header">
      <h1 className="header-name" style={{ opacity: showText ? 1 : 0, transition: "opacity 7s" }}> Eric Kirberger </h1>
      <h1 className="header-title" style={{ opacity: showText ? 1 : 0, transition: "opacity 7s" }}>Web Developer</h1>
    </header>
  );
}