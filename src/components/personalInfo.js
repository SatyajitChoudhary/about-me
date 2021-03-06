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

const RenderIcon = ({ icon,link }) => {
  if (typeof iconMap[icon] !== "undefined") {
    return React.createElement(iconMap[icon], {
      className: "iamIcon",
    });
  }
};

const RenderInfoCard = ({ title, value,link }) => {
  return (
    <div className="showInfoBox">
      <a href={link}><RenderIcon icon={title} link={link}/></a>
      <div className="showMoreInfoBox">
        <a href={link} id="title">{title}</a>
        <a href={link} id="value">{value}</a>
      </div>
    </div>
  );
};

const PeronalInfo = () => {
  return (
    <div data-aos="slide-left" className="pInfoContainer">
      <div className="pInfoDetails">
        {myPersonalInfo.map((item) => (
          <RenderInfoCard key={item.title} {...item} />
        ))}
      </div>
      <div className="pInfoGMapContainer" id="locationMap">
        {/* <SimpleMap /> */}
        <iframe  src={mapURI} className="mapStyle" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default PeronalInfo;
