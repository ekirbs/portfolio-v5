import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "./projectsArray";
import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast, bostonStreetCuisine, taskSandwich } from './images';
import "../../assets/css/projectsStyle3.css";
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
      <>
        <div id="projects" className="projects-card">
          <Slider {...settings} className="projects-slider" >

            <div className="showcase-card">
              <h3>5</h3>
            </div>

            <div className="showcase-card">
              <h3>6</h3>
            </div>

          </Slider>
        </div>
      </>
    );
  }
}