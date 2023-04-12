import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome, AiFillMail, AiFillProject, AiFillMeh } from 'react-icons/ai';
import "../../assets/css/navStyle2.css";

export default function Navbar() {
  const [ showDropdown, setShowDropdown ] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <div className="nav">
        <div className="menu-icon" onClick={toggleDropdown}>
          {showDropdown ? (
            <FaTimes className="FaTimes" />
          ) : (
            <FaBars className="FaBars"/>
          )}
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            <div className="menu-items">
              <a href="#top"><AiFillHome /></a>
              <a href="#projects"><AiFillProject /></a>
              <a href="#about"><AiFillMeh /></a>
              <a href="#contact"><AiFillMail /></a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}