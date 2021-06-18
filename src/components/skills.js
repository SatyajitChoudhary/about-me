import React from "react";
import ReactLogo from "../assets/react.svg";
import NodeLogo from "../assets/nodejs-icon.svg";
import ReduxLogo from "../assets/redux.svg";
import MaterialUILogo from "../assets/material-ui.svg";
import SwaggerLogo from "../assets/swagger.svg";
import HtmlLogo from "../assets/html-5.svg";
import CssLogo from "../assets/css-3.svg";
import LinuxLogo from "../assets/linux-tux.svg";
import GitIcon from "../assets/git-icon.svg";
import JavaIcon from "../assets/java-icon.svg";
import JsLogo from "../assets/javascript.svg";
import "../styles/skills.css";
import { mySkills } from "../utils/config";
import Typewriter from "./common/typewritter";

const keysToSVG = {
  ReactLogo: ReactLogo,
  NodeLogo: NodeLogo,
  ReduxLogo: ReduxLogo,
  MaterialUILogo: MaterialUILogo,
  SwaggerLogo: SwaggerLogo,
  HtmlLogo: HtmlLogo,
  CssLogo: CssLogo,
  LinuxLogo: LinuxLogo,
  GitIcon: GitIcon,
  JavaIcon: JavaIcon,
  JsLogo: JsLogo,
};

const RenderItem = (props) => {
  const { item  : {title, src, description } , index } = props;
  const aosStyle =
    (index + 1) % 2 === 0
      ? "fade-down"
      : (index + 1) % 3 === 0
      ? "fade-left"
      : "fade-right";
  return (
    <div data-aos={aosStyle} className="card2">
      <div className="skillIconBall">
        <img className="skillSVG" alt={title} src={keysToSVG[src]} />
      </div>
      <div className="SkillDesc">
        <span className="SkillDescTitle">{title}</span>
        <span className="SkillDescText">{description}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="skillsContainer">
      <Typewriter text={["Checkout my Skills..."]} />
      <div className="showSkill">
        {mySkills.map((item, index) => (
          <RenderItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
