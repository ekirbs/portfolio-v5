import React from "react";
import { FaHtml5, FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import {
  DiCss3,
  DiJavascript1,
  DiMongodb,
  DiBootstrap,
  DiMaterializecss,
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
  SiPassport,
  SiHeroku,
  SiGithub,
  SiMicrosoftoffice,
  SiNodemon,
  SiJson,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandVscode } from "react-icons/tb";
import "../../assets/css/techsStyle2.css";

export default function Techs() {
  const icons = document.querySelectorAll(".tech-logo");

  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.animationPlayState = "paused";
      // icon.style.backgroundColor = "/*brand color*/";
    });

    icon.addEventListener("mouseleave", () => {
      icon.style.animationPlayState = "running";
      // icon.style.backgroundColor = "/*original background color*/";
    });
  });

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

        {/* <DiBootstrap className="tech-logo bootstrap-logo" title="Bootstrap" />
        <SiInsomnia className="tech-logo insomnia-logo" title="Insomnia" />
        <SiPassport className="tech-logo passport-logo" title="Passport.js" />
        <SiHeroku className="tech-logo heroku-logo" title="Heroku" />
        <SiGithub className="tech-logo github-logo" title="GitHub" />
        <SiMicrosoftoffice className="tech-logo msoffice-logo" title="Microsoft Office" />
        <FaNpm className="tech-logo npm-logo" title="NPM" />
        <GrMysql className="tech-logo mysql-logo" title="MySQL" />
        <DiMaterializecss className="tech-logo materialize-logo" title="Materialize CSS" />
        <SiNodemon className="tech-logo nodemon-logo" title="Nodemon" />
        <SiJson className="tech-logo json-logo" title="JSON" />
        <SiAxios className="tech-logo axios-logo" title="Axios" />
        <TbBrandVscode className="tech-logo vscode-logo" title="VS Code" /> */}
      </div>
    </>
  );
}
