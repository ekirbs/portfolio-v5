// import React from 'react';
// import { robotHead } from "../../assets/images";
// import "../../assets/css/headerStyle.css"

// export default function Header() {
//   return (
//     <header id="top" className="header">
//       <h1>Eric Kirberger</h1><img src={robotHead} className="headShot" alt="Eric Kirberger."></img><h1>Web Developer</h1>
//     </header>
//   );
// }

import React, { useState, useEffect } from 'react';
import { robotHead } from "../../assets/images";
import "../../assets/css/headerStyle.css"

export default function Header() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500);
  }, []);

  return (
    <header id="top" className="header">
      <h1 style={{ opacity: showText ? 1 : 0, transition: "opacity 3s" }}>Eric Kirberger</h1>
      <img src={robotHead} className="headShot" alt="Eric Kirberger." />
      <h1 style={{ opacity: showText ? 1 : 0, transition: "opacity 3s" }}>Web Developer</h1>
    </header>
  );
}