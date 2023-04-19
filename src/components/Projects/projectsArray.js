import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast, bostonStreetCuisine, taskSandwich } from './images';
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiJavascript1, DiMongodb } from "react-icons/di";
import { SiSequelize, SiGraphql, SiApollographql, SiHandlebarsdotjs, SiExpress, SiJquery } from "react-icons/si";

const Projects = [
  {
    "title": "Task Sandwich",
    "pic": taskSandwich,
    "deploy": "https://task-sandwich.herokuapp.com",
    "github": "https://github.com/slerner/task-sandwich",
    "description": "A task-management system with built in rewards system.",
    "technologies": [
      <SiApollographql className="tech-icon apollo-tech-icon" />,
      <DiCss3 className="tech-icon css-tech-icon" />,
      <FaNodeJs className="tech-icon node-tech-icon" />,
      <SiExpress className="tech-icon ex-tech-icon" />,
      <SiGraphql className="tech-icon graph-tech-icon" />,
      <FaHtml5 className="tech-icon html-tech-icon" />,
      <DiJavascript1 className="tech-icon js-tech-icon" />,
      <DiMongodb className="tech-icon mongo-tech-icon" />,
      <FaReact className="tech-icon react-tech-icon" />,
    ]
  },
  {
    "title": "Boston Street Cuisine",
    "pic": bostonStreetCuisine,
    "deploy": "https://boston-street-cuisine-app.herokuapp.com/",
    "github": "https://github.com/ekirbs/street-food-blog",
    "description": "Locate street food vendors in Boston. Find out information about them and discuss with other users.",
    "technologies": [
      <h6 className="hbrs-tech-icon"><SiHandlebarsdotjs className="tech-icon hbrs-tech-icon" />Handlebars</h6>,
      <h6 className="node-tech-icon"><FaNodeJs className="tech-icon node-tech-icon" />Node.js</h6>,
      <h6 className="jq-tech-icon"><SiJquery className="tech-icon" />JQuery</h6>,
      <h6 className="ex-tech-icon"><SiExpress className="tech-icon" />Express.js</h6>,
      <h6 className="html-tech-icon"><FaHtml5 className="tech-icon" />HTML5</h6>,
      <h6 className="css-tech-icon"><DiCss3 className="tech-icon" />CSS3</h6>,
      <h6 className="js-tech-icon"><DiJavascript1 className="tech-icon" />JavaScript</h6>
    ]
  },
  {
    "title": "Daily Schedule Planner",
    "pic": dailySchedulePlanner,
    "deploy": "https://ekirbs.github.io/daily-schedule-planner/",
    "github": "https://github.com/ekirbs/daily-schedule-planner",
    "description": "A Daily Schedule Planner to allows the saving, organization, and deletion of daily activities.",
    "technologies": [
      <h6 className="hbrs-tech-icon"><SiHandlebarsdotjs className="tech-icon hbrs-tech-icon" />Handlebars</h6>,
      <h6 className="node-tech-icon"><FaNodeJs className="tech-icon node-tech-icon" />Node.js</h6>,
      <h6 className="jq-tech-icon"><SiJquery className="tech-icon" />JQuery</h6>,
      <h6 className="ex-tech-icon"><SiExpress className="tech-icon" />Express.js</h6>,
      <h6 className="html-tech-icon"><FaHtml5 className="tech-icon" />HTML5</h6>,
      <h6 className="css-tech-icon"><DiCss3 className="tech-icon" />CSS3</h6>,
      <h6 className="js-tech-icon"><DiJavascript1 className="tech-icon" />JavaScript</h6>
    ]
  },
  {
    "title": "The BIG Quiz",
    "pic": theBigQuiz,
    "deploy": "https://ekirbs.github.io/the-big-quiz/",
    "github": "https://github.com/ekirbs/the-big-quiz",
    "description": "The BIG Quiz.  A timed quiz that stores and displays high scores.",
    "technologies": [
      <h6 className="jq-tech-icon"><SiJquery className="tech-icon" />JQuery</h6>,
      <h6 className="html-tech-icon"><FaHtml5 className="tech-icon" />HTML5</h6>,
      <h6 className="css-tech-icon"><DiCss3 className="tech-icon" />CSS3</h6>,
      <h6 className="js-tech-icon"><DiJavascript1 className="tech-icon" />JavaScript</h6>
    ]
  },
  {
    "title": "Nat Park Travel Guide",
    "pic": natParkTravelGuide,
    "deploy": "https://ekirbs.github.io/national-park-travelers-guide/",
    "github": "https://github.com/ekirbs/national-park-travelers-guide",
    "description": "A Traveler's Guide to all National Parks in Northeast USA.",
    "technologies": [
      <h6 className="jq-tech-icon"><SiJquery className="tech-icon" />JQuery</h6>,
      <h6 className="html-tech-icon"><FaHtml5 className="tech-icon" />HTML5</h6>,
      <h6 className="css-tech-icon"><DiCss3 className="tech-icon" />CSS3</h6>,
      <h6 className="js-tech-icon"><DiJavascript1 className="tech-icon" />JavaScript</h6>
    ]
  },
  {
    "title": "Password Generator",
    "pic": randomPasswordGenerator,
    "deploy": "https://ekirbs.github.io/random-password-generator/",
    "github": "https://github.com/ekirbs/random-password-generator",
    "description": "A Random Password Generator to provide secure passwords privately.",
    "technologies": [
      <h6 className="hbrs-tech-icon"><SiHandlebarsdotjs className="tech-icon hbrs-tech-icon" />Handlebars</h6>,
      <h6 className="node-tech-icon"><FaNodeJs className="tech-icon node-tech-icon" />Node.js</h6>,
      <h6 className="jq-tech-icon"><SiJquery className="tech-icon" />JQuery</h6>,
      <h6 className="ex-tech-icon"><SiExpress className="tech-icon" />Express.js</h6>,
      <h6 className="html-tech-icon"><FaHtml5 className="tech-icon" />HTML5</h6>,
      <h6 className="css-tech-icon"><DiCss3 className="tech-icon" />CSS3</h6>,
      <h6 className="js-tech-icon"><DiJavascript1 className="tech-icon" />JavaScript</h6>
    ]
  },
  {
    "title": "Weather Forecast",
    "pic": weatherForecast,
    "deploy": "https://ekirbs.github.io/weather-forecast-finder/",
    "github": "https://github.com/ekirbs/weather-forecast-finder",
    "description": "A Weather Forecast search function using the OpenWeatherMapAPI.",
    "technologies": [
      <h6 className="hbrs-tech-icon"><SiHandlebarsdotjs className="tech-icon hbrs-tech-icon" />Handlebars</h6>,
      <h6 className="node-tech-icon"><FaNodeJs className="tech-icon node-tech-icon" />Node.js</h6>,
      <h6 className="jq-tech-icon"><SiJquery className="tech-icon" />JQuery</h6>,
      <h6 className="ex-tech-icon"><SiExpress className="tech-icon" />Express.js</h6>,
      <h6 className="html-tech-icon"><FaHtml5 className="tech-icon" />HTML5</h6>,
      <h6 className="css-tech-icon"><DiCss3 className="tech-icon" />CSS3</h6>,
      <h6 className="js-tech-icon"><DiJavascript1 className="tech-icon" />JavaScript</h6>
    ]
  }
]

export default Projects;