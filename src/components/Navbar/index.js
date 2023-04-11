import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome, AiFillMail, AiFillProject, AiFillMeh } from 'react-icons/ai';
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
            <a href="#top"><AiFillHome /></a>
            <a href="#projects"><AiFillProject /></a>
            <a href="#about"><AiFillMeh /></a>
            <a href="#contact"><AiFillMail /></a>
          </div>
        </div>
      )}
    </>
  );
}