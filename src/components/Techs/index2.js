import React from "react";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiJavascript1, DiMongodb } from "react-icons/di";
import { SiSequelize, SiGraphql, SiApollographql, SiHandlebarsdotjs } from "react-icons/si";
import "../../assets/css/techsStyle2.css";

export default function Techs() {

  return (
    <>
      <div className="techs-card">
        <DiCss3 className="tech-logo css3-logo" title="CSS3" />
        <DiJavascript1 className="tech-logo js-logo" title="JavaScript" />
        <DiMongodb className="tech-logo mongo-logo" title="MongoDB" />
        <FaHtml5 className="tech-logo html5-logo" title="HTML5" />
        <FaNodeJs className="tech-logo node-logo" title="Node.js" />
        <FaReact className="tech-logo react-logo" title="React.js" />
        <SiApollographql className="tech-logo apollo-logo" title="Apollo Servers" />
        <SiGraphql className="tech-logo graph-logo" title="GraphQL" />
        <SiHandlebarsdotjs className="tech-logo handlebars-logo" title="Handlebars.js" />
        <SiSequelize className="tech-logo sequelize-logo" title="Sequelize" />
      </div>
    </>
  );
}