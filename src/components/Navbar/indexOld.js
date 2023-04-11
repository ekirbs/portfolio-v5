import React from "react";
import "../../assets/css/navStyle.css";

export default function Navbar() {

  return (
    <>
      <div className="navBar">
        <a href="#top">Top</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
}