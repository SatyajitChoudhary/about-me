import React, { Component } from "react";
import HeaderRoutes from "../components/headerRoutes";
import IntroPic from "../components/introPic";
import IntroText from "../components/introText";
import StickyNav from "../components/stickyNav";
import Skills from "../components/skills";
import Projects from "../components/projects";
import RoadMap from "../components/roadMap";
import ScrollButton from "../components/scrollToTop";
import DownloadResume from "../components/downloadCV";
import { HeaderBg, FooterBg } from "../components/background";
import ContactMe from "../components/contactMe";

import "../styles/common.css";

class SinglePage extends Component {
  render() {
    return (
      <div>
        <StickyNav />
        {/* <section> */}
        <HeaderBg />
        <HeaderRoutes />
        <IntroPic />
        <IntroText />
        {/* </section> */}
        {/* <section id="roadmap"> */}
        <RoadMap />
        {/* </section>
        <section> */}
        <DownloadResume />
        {/* </section>
        <section> */}
        <Skills />
        {/* </section>
        <section> */}
        {/* <Projects /> */}
        {/* </section> */}
        <ScrollButton />
        {/* <section> */}
        <ContactMe />
        {/* <SocialMedia /> */}
        {/* </section>
        <section> */}
        <FooterBg />
        {/* </section> */}
      </div>
    );
  }
}

export default SinglePage;
