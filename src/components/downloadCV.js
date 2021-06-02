import React, { useState } from "react";
// import AttachFileIcon from "@material-ui/icons/AttachFile";
import Typewriter from "./common/typewritter";
import { downloadResumeConfig } from "../utils/config";
import "../styles/downloadCV.css";

const Download = ({ checked, setchecked, downloadResumeConfig }) => {
  const { fileLink } = downloadResumeConfig;

  const downloadFile = () => {
    if (!checked) {
      window.location = fileLink;
    }
    setchecked(!checked);
  };

  return (
    <div id="ms-container">
      <label htmlFor="ms-download">
        <div className="ms-content">
          <div className="ms-content-inside">
            <input
              onChange={downloadFile}
              value={checked}
              type="checkbox"
              id="ms-download"
            />
            <div className="ms-line-down-container">
              <div className="ms-line-down"></div>
            </div>
            <div className="ms-line-point"></div>
          </div>
        </div>
      </label>
    </div>
  );
};

const DownloadResume = () => {
  const [checked, setchecked] = useState("");
  const props = { checked, setchecked, downloadResumeConfig };

  return (
    <div id="resume" style={{ margin: "100px", position: "relative" }}>
      <Typewriter text={["Here is my Resume..."]} />
      {/* <a href={fileLink} download={fileName}>
        <div className="downloadBtn">
          <AttachFileIcon />
          Download Now
        </div>
      </a> */}
      <div style={{ position: "relative", margin: 100, paddingBottom: 280 }}>
        <Download {...props} />
      </div>
    </div>
  );
};

export default DownloadResume;
