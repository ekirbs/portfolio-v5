import React from "react";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiJavascript1, DiMongodb } from "react-icons/di";
import { SiSequelize, SiGraphql, SiApollographql, SiHandlebarsdotjs } from "react-icons/si";
import "../../assets/css/techsStyle.css";

export default function Techs() {

  return (
    <>
      <div className="techs-card">
        <DiCss3 className="tech-logo" />
        <DiJavascript1 className="tech-logo" />
        <DiMongodb className="tech-logo" />
        <FaHtml5 className="tech-logo" />
        <FaNodeJs className="tech-logo" />
        <FaReact className="tech-logo" />
        <SiApollographql className="tech-logo" />
        <SiGraphql className="tech-logo" />
        <SiHandlebarsdotjs className="tech-logo" />
        <SiSequelize className="tech-logo" />
      </div>
    </>
  );
}