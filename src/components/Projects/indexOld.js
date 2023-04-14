import { useState } from "react";
import Slider from "react-touch-drag-slider";
import { Container, Button } from "react-bootstrap";
import projects from "./projects";
import "../../assets/css/projectsStyle.css";

// Whatever you render out in the Slider will be draggable 'slides'
export default function Projects() {
  // state should start with the index you want to start the slide on
  
  const [index, setIndex] = useState(0);

  const setFinishedIndex = (i) => {
    console.log("finished dragging on slide", i);
    setIndex(i);
  };

  const next = () => {
    setIndex((index + 1) % projects.length);
  };
  
  const previous = () => {
    setIndex((index + projects.length - 1) % projects.length);
  };

  return (
    <>
      <div id="projects" className="projects-card">
        <h1 className="projects-card-heading">My Work</h1>
        <Container className="projects-card-content">
          <div className="slider-container">
            <Button
              onClick={previous}
              left
              // disabled={index === 0}
              className="slider-button slider-button-left bg-dark"
            >
              〈
            </Button>
            <Button
              onClick={next}
              right
              // disabled={index === projects.length - 1}
              className="slider-button slider-button-right bg-dark"
            >
              〉
            </Button>
            <Slider
              onSlideComplete={setFinishedIndex}
              onSlideStart={(i) => {
                console.clear();
                console.log("started dragging on slide", i);
              }}
              activeIndex={index}
              threshHold={100}
              transition={0.2}
              scaleOnDrag={true}
            >
              {projects.map(({ pic, title, description, url }, index) => (
                <div className="project-container">
                  <img src={pic} key={index} alt={title} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={url} target="_blank" rel="noreferrer"><h4>Visit Site!</h4></a>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
}
