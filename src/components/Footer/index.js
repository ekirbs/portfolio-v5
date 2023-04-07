import React from "react";
import { instagramLogo, githubLogo, linkedinLogo } from "../../assets/images";

import '../../assets/css/footerStyle.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.instagram.com/clearlyimarobot83/" target="_blank" rel="noreferrer"><img src={instagramLogo} className="footerZoom rounded-image" alt="Instagram logo."/><span className="footer-text">Instagram</span></a>
      <a href="https://github.com/ekirbs" target="_blank" rel="noreferrer"><img src={githubLogo} className="footerZoom rounded-image" alt="GitHub logo."/><span className="footer-text">GitHub</span></a>
      <a href="https://www.linkedin.com/in/eric-kirberger/" target="_blank" rel="noreferrer"><img src={linkedinLogo} className="footerZoom rounded-image" alt="Linkedin logo."/><span className="footer-text">LinkedIn</span></a>
    </footer>
  );
}

export default Footer;
