import React, { useState } from "react";
import ExploreIcon from "@material-ui/icons/Explore";
import scrollIdentifier from "../utils/scrollIdentifier";
import "../styles/navbar.css";

function StickyNav(props) {
  const [displayNav, setdisplayNav] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  const toggleVisible = () => {
    setdisplayNav(scrollIdentifier());
    !scrollIdentifier() && setToggleActive(false);
  };

  const onActiveToggle = () => {
    setToggleActive(!toggleActive);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      style={{ display: displayNav ? "inline" : "none" , zIndex: 100 }}
      className="nav-container"
    >
      {/* <ListIcon /> */}

      <div
        id="circularMenu1"
        className={`${
          toggleActive ? "active" : ""
        } circular-menu circular-menu-left`}
      >
        <a className="floating-btn" onClick={onActiveToggle}>
          <ExploreIcon color="primary" class="iconSize" />
        </a>

        <menu className="items-wrapper">
          <a href="#" className="menu-item fa fa-home"></a>
          <a href="#" className="menu-item fa fa-user"></a>
          <a href="#" className="menu-item fa fa-pie-chart"></a>
          <a href="#" className="menu-item fa fa-cog"></a>
          <a href="#" className="menu-item fa fa-pie-chart"></a>
          <a href="#" className="menu-item fa fa-cog"></a>
        </menu>
      </div>
    </div>
  );
}

export default StickyNav;
