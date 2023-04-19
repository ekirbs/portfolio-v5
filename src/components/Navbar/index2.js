import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome, AiFillProject, AiFillFolderOpen, AiFillMeh, AiFillCrown, AiFillMail, AiFillPhone } from 'react-icons/ai';
import "../../assets/css/navStyle2.css";

export default function Navbar() {
  const [ showDropdown, setShowDropdown ] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <div className="nav-card">
        <div className="menu-icon" onClick={toggleDropdown}>
          {showDropdown ? (
            <FaTimes className="FaTimes" />
          ) : (
            <FaBars className="FaBars"/>
          )}
        </div>
        {showDropdown && (
          <div className="nav-menu">
            <div className="menu-items">
              <a href="#top"><AiFillHome className="menu-option" /></a>
              <a href="#projects"><AiFillFolderOpen className="menu-option" /></a>
              <a href="#about"><AiFillCrown className="menu-option" /></a>
              <a href="#contact"><AiFillPhone className="menu-option" /></a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}