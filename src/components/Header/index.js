import React from 'react';
import { robotHead } from "../../assets/images";
import "../../assets/css/headerStyle.css"

export default function Header() {
  return (
    <header id="top" className="header">
      Eric Kirberger <img src={robotHead} className="headShot" alt="Eric Kirberger."></img> Web Developer
    </header>
  );
}