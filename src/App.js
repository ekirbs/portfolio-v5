import React from 'react';
import { Navbar, Home, Contact } from "./components";

import "./assets/css/baseStyle.css";

export default function App() {
 
  return (
    <>
      <Navbar />
      <Home />
      <Contact />
    </>
  );
}
