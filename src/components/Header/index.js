import React from 'react';
import { robotHead } from "../../assets/images";
import "../../assets/css/headerStyle.css"

export default function Header() {
  return (
    <header id="top" className="header">
      <h1>Eric Kirberger</h1><img src={robotHead} className="headShot" alt="Eric Kirberger."></img><h1>Web Developer</h1>
    </header>
  );
}