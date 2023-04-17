import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "./projectsArray";
import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast, bostonStreetCuisine, taskSandwich } from './images';
import "../../assets/css/projectsStyle3.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import ArrowButton from "./Arrow";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowButton direction="prev" />,
      nextArrow: <ArrowButton direction="next" />,
    };

    return (
      <>
        <div id="projects" className="projects-card">
          <Slider {...settings} className="projects-slider" >

            {/* <div className="showcase-card">
              <h3>MAXIMUM</h3>
            </div>

            <div className="showcase-card">
              <h3>POWER!!</h3>
            </div> */}

            {projects.map(({  pic, title, description, technologies, deploy, github }, index) => (
              <div className="showcase-card">
                <div className="showcase-upper-row">
                  <div className="showcase-pic">
                    <img src={pic} key={index} alt={title} />
                  </div>
                  <div className="showcase-title-tech">
                    <h3>{title}</h3>
                    <p>{technologies}</p>
                  </div>
                </div>
                <div className="showcase-lower-row">
                  <div className="showcase-links">
                    <a href={deploy} target="_blank" rel="noreferrer"><h4>Deployed App</h4></a>
                    <a href={github} target="_blank" rel="noreferrer"><h4>GitHub Repo</h4></a>
                  </div>
                  <div className="showcase-desc">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            ))}

          </Slider>
        </div>
      </>
    );
  }
}