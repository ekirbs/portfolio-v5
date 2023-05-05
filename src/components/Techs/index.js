import React from "react";
import { 
  FaHtml5,
  FaReact,
  FaNodeJs,
  
  FaSass,
} from "react-icons/fa";
import {
  DiCss3,
  DiJavascript1,
  DiMongodb,

  DiBootstrap,
} from "react-icons/di";
import {
  SiSequelize,
  SiGraphql,
  SiApollographql,
  SiHandlebarsdotjs,
  SiExpress,
  SiJquery,

  SiAxios,
  SiInsomnia,
  SiHeroku,
  SiGithub,
} from "react-icons/si";
import "../../assets/css/techsStyle.css";

export default function Techs() {

  return (
    <>
      <div className="techs-card">
        <DiCss3 className="tech-logo css3-logo" title="CSS3" />
        <DiJavascript1 className="tech-logo js-logo" title="JavaScript" />
        <SiApollographql className="tech-logo apollo-logo" title="Apollo Servers" />
        <SiJquery className="tech-logo jquery-logo" title="JQuery" />
        <FaHtml5 className="tech-logo html5-logo" title="HTML5" />
        <FaNodeJs className="tech-logo node-logo" title="Node.js" />
        <FaReact className="tech-logo react-logo" title="React.js" />
        <DiMongodb className="tech-logo mongo-logo" title="MongoDB" />
        <SiGraphql className="tech-logo graph-logo" title="GraphQL" />
        <SiExpress className="tech-logo express-logo" title="Express.js" />
        <SiHandlebarsdotjs className="tech-logo handlebars-logo" title="Handlebars.js" />
        <SiSequelize className="tech-logo sequelize-logo" title="Sequelize" />

        <DiBootstrap className="tech-logo bootstrap-logo" title="Bootstrap" />
        <SiInsomnia className="tech-logo insomnia-logo" title="Insomnia" />
        <SiHeroku className="tech-logo heroku-logo" title="Heroku" />
        <SiGithub className="tech-logo github-logo" title="GitHub" />
        <SiAxios className="tech-logo axios-logo" title="Axios" />
        <FaSass className="tech-logo sass-logo" title="Sass" />
      </div>
    </>
  );
}