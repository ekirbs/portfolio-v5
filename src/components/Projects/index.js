import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import projects from "./projects";
import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast, bostonStreetCuisine, taskSandwich } from './images';
import "../../assets/css/projectsStyleSandbox.css";
import { Container, Col, Row, Button } from "react-bootstrap";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="projects-card">
        <h2>My Work</h2>
        <Slider {...settings}>

          <div className="showcase-card">
            <h3>Task Sandwich</h3>
            <p>Technologies:</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a href="https://task-sandwich.herokuapp.com">Click Me</a>
          </div>

          <div className="showcase-card">
            <h3>Boston Street Cuisine</h3>
            <img src={bostonStreetCuisine} style={{height: "100px", width: "100px"}}></img>
          </div>

          <div className="showcase-card">
            <h3>5</h3>
          </div>

          <div className="showcase-card">
            <h3>6</h3>
          </div>

        </Slider>
      </div>
    );
  }
}