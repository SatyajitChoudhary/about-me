import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import scrollIdentifier from "../utils/scrollIdentifier";
import HomeIcon from "@material-ui/icons/Home";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "../styles/navbar.css";

function StickyNav() {
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
      style={{ display: displayNav ? "inline" : "none", zIndex: 100 }}
      className="nav-container"
    >
      <div
        id="circularMenu1"
        className={`${
          toggleActive ? "active" : ""
        } circular-menu circular-menu-left`}
      >
        <a className="floating-btn" onClick={onActiveToggle}>
       { toggleActive ? <CloseIcon class="iconSize" /> : <MenuIcon class="iconSize" />}
        </a>

        <menu className="items-wrapper">
          <a href="#" className="menu-item fa fa-home">
            <HomeIcon fontSize="large" />
          </a>
          <a href="#journey" className="menu-item fa fa-user">
            <AirplanemodeActiveIcon fontSize="large" />
          </a>
          <a href="#skills" className="menu-item fa fa-pie-chart">
            <SettingsEthernetIcon fontSize="large" />
          </a>
          <a href="#ContactMe" className="menu-item fa fa-cog">
            <ForumIcon fontSize="large" />
          </a>
          <a href="#resume" className="menu-item fa fa-pie-chart">
            <AttachFileIcon fontSize="large" />
          </a>
          {/* <a href="#" className="menu-item fa fa-cog"></a> */}
        </menu>
      </div>
    </div>
  );
}

export default StickyNav;