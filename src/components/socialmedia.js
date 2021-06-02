import React from "react";
import "../styles/socialMedia.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const SocialMedia = () => {
  return (
    <div class="social-btns">
      <a class="btn facebook" href="#">
        {/* <i class="fa fa-facebook"> */}
        <FacebookIcon class="fa fa-facebook" />
        {/* </i> */}
      </a>
      <a class="btn instagram" href="#">
        {/* <i class="fa fa-instagram"> */}
        <InstagramIcon class="fa fa-instagram" />
        {/* </i> */}
      </a>
      <a class="btn github" href="#">
        {/* <i class="fa fa-github"> */}
        <GitHubIcon class="fa fa-github" />
        {/* </i> */}
      </a>
      <a class="btn linkedin" href="#">
        {/* <i class="fa fa-linkedin"> */}
        <LinkedInIcon class="fa fa-linkedin" />
        {/* </i> */}
      </a>
      <a class="btn whatsapp" href="#">
        {/* <i class="fa fa-whatsapp"> */}
        <WhatsAppIcon class="fa fa-whatsapp" />
        {/* </i> */}
      </a>
    </div>
  );
};

export default SocialMedia;
