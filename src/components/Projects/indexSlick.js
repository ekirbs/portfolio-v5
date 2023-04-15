import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Col, Row } from "react-bootstrap";
import projects from "./projectsArray";
import "../../assets/css/projectsStyleSlick.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { slides: projects };
  }

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
          <h1 className="projects-card-heading">My Work</h1>
          <Slider {...settings}>
            {this.state.slides.map(({ pic, title, deploy, github, description, technologies }, index) => {
              return (
                <div key={index} className="project-container">
                      <img src={pic} key={index} alt={title} className="project-img" />
                      <h3>{title}</h3>
                      <p>{technologies}</p>
                      <p>{description}</p>
                      <a href={deploy} target="_blank" rel="noreferrer"><h4>Deployed App</h4></a>
                      <a href={github} target="_blank" rel="noreferrer"><h4>GitHub Repo</h4></a>
                  {/* <Row style={{ height: "85%", width: "100%" }}>
                    <Col>
                      <img src={pic} key={index} alt={title} className="project-img" />
                      <h3>{title}</h3>
                    </Col>
                    <Col>
                      <p>{technologies}</p>
                      <p>{description}</p>
                    </Col>
                  </Row>
                  <Row style={{ height: "15%", width: "100%" }}>
                    <Col>
                      <a href={deploy} target="_blank" rel="noreferrer"><h4>Deployed App</h4></a>
                    </Col>
                    <Col>
                      <a href={github} target="_blank" rel="noreferrer"><h4>GitHub Repo</h4></a>
                    </Col>
                  </Row> */}
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    )
  }
}