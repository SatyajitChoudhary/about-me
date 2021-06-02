import React from "react";
import "../styles/introPic.css";
import logo from "../assets/myphoto.jpg"
function IntroPic(props) {
  return (
    <div className="image-conatainer">
      <img
        src={logo}
        className="myPic"
        alt="my-pic"
      />
    </div>
  );
}

export default IntroPic;
