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
};

const RenderItem = ({ props }) => {
  const { title, src, description } = props;

  return (
    <div className="skillBox">
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
    <div id='skills' className="skillsContainer">
      <Typewriter text={["Checkout my Skills..."]} />
      <div className="showSkill">
        {mySkills.map((item) => (
          <RenderItem key={item.title} props={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
