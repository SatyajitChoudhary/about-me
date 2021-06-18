import React from "react";
import myPic from "../../assets/satya.jpg";
import "../../styles/mobile/mobilePage.css";

const IntroPicMobile = (props) => {
  return (
    <div id="picContainer">
      <img src={myPic} id="myPic" alt="my-pic" />
    </div>
  );
};

export default IntroPicMobile;