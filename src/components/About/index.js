import React from "react";
import { profilePhoto } from "../../assets/images";
import "../../assets/css/aboutStyle.css";

export default function About() {

  return (
    <>
      <div className="about-card">
        <div className="about-section alva-display">
          <p className="about-content">
            I am a <span className="caps">Web Developer</span> and graduate of the <span className="caps">Rutgers University </span>
            Full-Stack Web Development Program. I excel at front-end development
            using technologies like <span className="caps">React.js</span> and more.
          </p>
          <img src={profilePhoto} className="profile-photo" alt="Profile photo."></img>
          <p className="about-content">
            My background in <span className="caps">education</span> and coaching means I have a strong
            understanding of <span className="caps">teamwork</span>, <span className="caps">management</span>, communication, conflict
            resolution, and creative problem solving.
          </p>
        </div>
      </div>
    </>
  );
}