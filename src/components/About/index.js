import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { profilePhoto } from "../../assets/images";
import "../../assets/css/aboutStyle.css";

export default function About() {

  return (
    <>
      <div className="about-card">
        {/* <h3>Hi!</h3> */}
        <div className="about-section alva-display">
          <p className="about-content">
            I am a Web Developer and graduate of the Rutgers University
            Full-Stack Web Development Program. I excel at front-end development
            using technologies like React.js, Node.js, and more.
          </p>
          <img src={profilePhoto} className="profile-photo" alt="Profile photo."></img>
          <p className="about-content">
            My background in education and coaching means I have a strong
            understanding of teamwork, management, communication, conflict
            resolution, and creative problem solving.
          </p>
        </div>
      </div>
    </>
  );
}