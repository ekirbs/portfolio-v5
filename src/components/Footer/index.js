import React from "react";
import { instagramLogo, githubLogo, linkedinLogo } from "../../assets/images";

import '../../assets/css/footerStyle.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.instagram.com/clearlyimarobot83/" target="_blank" rel="noreferrer"><img src={instagramLogo} alt="Instagram logo."/><span className="footerText">Instagram</span></a>
      <a href="https://github.com/ekirbs" target="_blank" rel="noreferrer"><img src={githubLogo} alt="GitHub logo."/><span className="footerText">GitHub</span></a>
      <a href="https://www.linkedin.com/in/eric-kirberger/" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="Linkedin logo."/><span className="footerText">LinkedIn</span></a>
    </footer>
  );
}

export default Footer;
