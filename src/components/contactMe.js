import React, { useState } from "react";
import Typewriter from "./common/typewritter";
import SocialMedia from "./socialmedia";

import "../styles/contactMe.css";

export const FormInput = ({ title, onChange, value, type, placeholder }) => {
  const onChangeEvent = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="inputContainer">
      <p className="contactTitle">{title}</p>
      {type === "textarea" ? (
        <textarea
          className="formTextArea"
          value={value}
          onChange={onChangeEvent}
        />
      ) : (
        <input
          className="formInput"
          placeholder={placeholder}
          value={value}
          onChange={onChangeEvent}
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [desc, setdesc] = useState("");
  return (
    <div className="formContainer">
      <div className="nameContainer">
        <FormInput
          title="Your Name"
          placeholder="What's your name?"
          value={name}
          onChange={setname}
        />
        <FormInput
          title="Your Contact"
          placeholder="Your contact info"
          value={contact}
          onChange={setcontact}
        />
      </div>
      <FormInput
        title="Message"
        placeholder="Enter your message"
        value={desc}
        type="textarea"
        onChange={setdesc}
      />
      <div class="wrapper">
        <a href="#" class="button">
          Send Me
        </a>
      </div>
    </div>
  );
};

const ContactMe = () => {
  return (
    <div id="ContactMe" className="contactMeContainer">
      <Typewriter text={["Contact Me"]} />
      {/* <p className="subHeading">Send me a message!</p> */}
      <div style={{display: "flex", flexDirection: 'row'}}>
        <SocialMedia />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;
