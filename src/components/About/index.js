import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { profilePhoto } from "../../assets/images";
import "../../assets/css/aboutStyle.css";

export default function About() {

  return (
    <>
      <div className="about-card">
        <img src={profilePhoto} className="profile-photo" alt="Profile photo."></img>
      </div>
    </>
  );
}