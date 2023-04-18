import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  ResumeImg,
  ResumeDownload,
  ccmLogo,
  rutgersLogo,
  bootcampLogo,
  kcfLogo,
  lewLogo,
  cmsLogo,
} from "../../assets/images";
import "../../assets/css/resumeStyle3.css";

export default function Resume() {
  return (
    <>
      <div id="resume" className="resume-card">
        <div className="resume-top-content">
          <Col className="resume-download-card">
            <p>Click on the image to download my full resume!</p>
            <a href={ResumeDownload} download>
              <img
                src={ResumeImg}
                alt="My resume."
                className="resume-img"
              ></img>
            </a>
          </Col>
        </div>

        <div className="resume-section-card">
          <Row style={{ height: "10%" }}>
            <h3 className="resume-title">Education</h3>
          </Row>
          <Row style={{ height: "90%" }}>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Row>
                <img
                  src={rutgersLogo}
                  className="edu-logo"
                  alt="Rutgers University logo."
                ></img>
              </Row>
            </Col>
            <Col>
              <Row className="resume-content">
                <Col>
                  <p>Full-Stack Web Development Certificate</p>
                </Col>
                <Col>
                  <p>Rutgers University Full-Stack Web Development Program</p>
                </Col>
              </Row>
              <Row className="resume-content">
                <Col>
                  <p>New Jersey State Teaching Certificate of Eligibility</p>
                </Col>
                <Col>
                  <p>Rutgers University</p>
                </Col>
              </Row>
              <Row className="resume-content">
                <Col>
                  <p>Bachelor's Degree in Philosophy</p>
                </Col>
                <Col>
                  <p>Rutgers University</p>
                </Col>
              </Row>
              <Row className="resume-content">
                <Col>
                  <p>Associate Degree</p>
                </Col>
                <Col>
                  <p>County College of Morris</p>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Row>
                <img
                  src={bootcampLogo}
                  className="edu-logo"
                  alt="Rutgers Bootcamp logo."
                ></img>
              </Row>
              <Row>
                <img
                  src={ccmLogo}
                  className="edu-logo"
                  alt="County College of Morris logo."
                ></img>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="resume-section-card">
          <Row style={{ height: "10%" }}>
            <h3 className="resume-title">Experience</h3>
          </Row>
          <Row style={{ height: "90%", border: "2px solid var(--highmid" }}>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Row>
                <img src={lewLogo} className="exp-logo" alt="lew logo."></img>
              </Row>
              <Row>
                <img
                  src={cmsLogo}
                  className="exp-logo cms-logo"
                  alt="Central Middle School logo."
                ></img>
              </Row>
            </Col>
            <Col>
              <Row className="resume-content">
                <Col>
                  <p>Report Administrator, QA/QC Administator</p>
                </Col>
                <Col>
                  <p>LEW Environmental Services, '21 - '22</p>
                </Col>
              </Row>
              <Row className="resume-content">
                <Col>
                  <p>Head Instructor, Co-Founder</p>
                </Col>
                <Col>
                  <p>Central Heights Fencing Club, '10 - '20</p>
                </Col>
              </Row>
              <Row className="resume-content">
                <Col>
                  <p>Substitute Teacher</p>
                </Col>
                <Col>
                  <p>Long Hill Township School District, '12 - '20</p>
                </Col>
              </Row>
              <Row className="resume-content">
                <Col>
                  <p>Head Coach</p>
                </Col>
                <Col>
                  <p>Central Middle School, '12 - '20</p>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Row
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h6 className="chfc-title">Central Heights</h6>
                <img
                  src={kcfLogo}
                  className="kcf-logo"
                  alt="Kids Can Fence logo."
                ></img>
                <h6 className="chfc-title">Fencing Club</h6>
              </Row>
            </Col>
          </Row>
        </div>
        <Col></Col>
      </div>
    </>
  );
}
