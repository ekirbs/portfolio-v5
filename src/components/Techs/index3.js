import React from "react";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiJavascript1, DiMongodb } from "react-icons/di";
import { SiSequelize, SiGraphql, SiApollographql, SiHandlebarsdotjs } from "react-icons/si";
import { Row, Col, Container } from "react-bootstrap";
import "../../assets/css/techsStyle3.css";

export default function Techs() {

  return (
    <>
      <div className="techs-container">
      <Container>
        <Row className="justify-content-around techs-row">
          <Col xs={12} lg={8}>
            <div className="icon-group">
              <FaHtml5 className="tech-logo html5-logo" title="HTML5" />
              <DiCss3 className="tech-logo css3-logo" title="CSS3" />
              <DiJavascript1 className="tech-logo js-logo" title="JavaScript" />
              <FaReact className="tech-logo react-logo" title="React.js" />
              <FaNodeJs className="tech-logo node-logo" title="Node.js" />
              <DiMongodb className="tech-logo mongo-logo" title="MongoDB" />
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="icon-group">
              <SiGraphql className="tech-logo graph-logo" title="GraphQL" />
              <SiApollographql className="tech-logo apollo-logo" title="Apollo Servers" />
              <SiHandlebarsdotjs className="tech-logo handlebars-logo" title="Handlebars.js" />
              <SiSequelize className="tech-logo sequelize-logo" title="Sequelize" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}