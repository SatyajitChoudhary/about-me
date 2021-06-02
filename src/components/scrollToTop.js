import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import scrollIdentifier from "../utils/scrollIdentifier";
import { ReactComponent as ArrowUp } from "../assets/up-arrow.svg";
import "../styles/scrollToTop.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [changeComponent, setchangeComponent] = useState(false);

  const toggleVisible = () => {
    const decision = scrollIdentifier();
    setVisible(decision);
    if (!decision && changeComponent) {
      setchangeComponent(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const BeforeHover = () => (
    <div className="normal-container">
      <ArrowUp id="upArrow" fill="#afdaff" />
    </div>
  );

  const AfterHover = () => (
    <div className="onHover-container">
      <ArrowUp id="upArrow" fill="#aaa0ff" />
      <span id="Back">Back</span>
      <span id="top">to top</span>
      <span id="qus">?</span>
    </div>
  );

  return (
    <div style={{ position: "fixed", float: "right", right: 10, bottom: 0 }}>
      <div
        onMouseEnter={() => setchangeComponent(true)}
        onMouseLeave={() => setchangeComponent(false)}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        {changeComponent ? <AfterHover /> : <BeforeHover />}
      </div>
    </div>
  );
};

export default ScrollButton;
