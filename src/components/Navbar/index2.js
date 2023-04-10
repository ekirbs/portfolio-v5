import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../assets/css/navStyle.css";

export default function Navbar() {
  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <div className="menu-icon nav" onClick={toggleMenu}>
        <FaBars className="FaBars"/>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          <div className="close-icon" onClick={toggleMenu}>
            <FaTimes className="FaTimes" />
          </div>
          <div className="menu-items">
            <a href="#top">Top</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </>
  );
}