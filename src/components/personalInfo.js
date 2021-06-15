import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { myPersonalInfo } from "../utils/config";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../styles/personalInfo.css";
import { mapURI } from "../utils/config";
// import SimpleMap from "./googleMap";

const iconMap = {
  Email: MailOutlineIcon,
  Call: CallIcon,
  Location: LocationOnIcon,
};

const RenderIcon = ({ icon }) => {
  if (typeof iconMap[icon] !== "undefined") {
    return React.createElement(iconMap[icon], {
      className: "iamIcon",
    });
  }
};

const RenderInfoCard = ({ title, value }) => {
  return (
    <div className="showInfoBox">
      <RenderIcon icon={title} />
      <div className="showMoreInfoBox">
        <span id="title">{title}</span>
        <span id="value">{value}</span>
      </div>
    </div>
  );
};

const PeronalInfo = () => {
  return (
    <div className="pInfoContainer">
      <div className="pInfoDetails">
        {myPersonalInfo.map((item) => (
          <RenderInfoCard {...item} />
        ))}
      </div>
      <div className="pInfoGMapContainer">
        {/* <SimpleMap /> */}
        <iframe
          src={mapURI}
          height="300px"
          width="250px"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PeronalInfo;
