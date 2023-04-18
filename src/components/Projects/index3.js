import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "./projectsArray";
// import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast, bostonStreetCuisine, taskSandwich } from './images';
import "../../assets/css/projectsStyle3.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import { SiGithub } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import ArrowButton from "./Arrow";
import "animate.css";



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
                <h3 className="showcase-main-title">{title}</h3>
                <div className="showcase-upper-row">
                  <div className="showcase-pic">
                    <img src={pic} key={index} alt={title} />
                    <div className="showcase-desc">
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="tech-list-container">
                    <ul 
                      style={{ 
                        display:"flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        // listStyleImage: 
                      }}
                      className="showcase-list"
                    >
                      <h4 className="showcase-list-title">Technologies:</h4>
                      {technologies.map((tech, i) => (
                        <li key={i} className="showcase-list-item">{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="showcase-lower-row">
                  {/* <div className="showcase-links"> */}
                    <a href={deploy} target="_blank" rel="noreferrer"><GrDeploy className="button-icon-left" /><h4>Deployed App</h4><GrDeploy className="button-icon-right" /></a>
                    <a href={github} target="_blank" rel="noreferrer"><SiGithub className="button-icon-left" /><h4>GitHub Repo</h4><SiGithub className="button-icon-right" /></a>
                  {/* </div> */}
                </div>
              </div>
            ))}

          </Slider>
        </div>
      </>
    );
  }
}