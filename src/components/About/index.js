import React from "react";
import { profilePhoto } from "../../assets/images";
import "../../assets/css/aboutStyle.css";

export default function About() {

  return (
    <>
      <div id="about" className="about-card">
        <h2>About Me</h2>
        <img src={profilePhoto} className="profile-photo" alt="Profile photo."></img>
      </div>
    </>
  );
}