import React from "react";
import "../styles/socialMedia.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const SocialMedia = () => {
  return (
    <div data-aos="slide-right" className="social-btns">
      <a className="btn facebook" href="#">
        <FacebookIcon class="fa fa-facebook" />
      </a>
      <a className="btn instagram" href="#">
        <InstagramIcon class="fa fa-instagram" />
      </a>
      <a className="btn github" href="#">
        <GitHubIcon class="fa fa-github" />
      </a>
      <a className="btn linkedin" href="#">
        <LinkedInIcon class="fa fa-linkedin" />
      </a>
      <a className="btn whatsapp" href="#">
        <WhatsAppIcon class="fa fa-whatsapp" />
      </a>
    </div>
  );
};

export default SocialMedia;
