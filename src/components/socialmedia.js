import React from "react";
import "../styles/socialMedia.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import {socialMediaLinks} from "../utils/config"

const SocialMedia = () => {
  return (
    <div data-aos="slide-right" className="social-btns">
      <a className="btn facebook" href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" >
        <FacebookIcon class="fa fa-facebook" />
      </a>
      <a className="btn instagram" href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
        <InstagramIcon class="fa fa-instagram" />
      </a>
      <a className="btn github" href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon class="fa fa-github" />
      </a>
      <a className="btn linkedin" href={socialMediaLinks.linkedIn} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon class="fa fa-linkedin" />
      </a>
      <a className="btn whatsapp" href={socialMediaLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon class="fa fa-whatsapp" />
      </a>
    </div>
  );
};

export default SocialMedia;
