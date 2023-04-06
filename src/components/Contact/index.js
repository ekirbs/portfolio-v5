import React, { useState } from 'react';

import { validateEmail } from "../../utils/helpers";
import "../../assets/css/contactStyle";

export default function Contact() {

  const [errorMessage, setErrorMessage] = useState("");
  const [formInput, setFormInput] = useState({ name: "", email: "", message: "" })

  console.log(formInput);

  const handleInputChange = (e) => setFormInput({ ...formInput, [e.target.name]: e.target.value }); // square brackets in object denotes key 

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formInput.email) || !formInput.name) {
      setErrorMessage("Either you didn't enter a name, or the email address you entered is invalid.");
      return;
    }

    alert(`Welcome to the jungle, ${formInput.name}!`);

  }

  return (
    <div className="contact-card">
      <h1 className="contact-card-heading">Contact Me</h1>
      <div className ="contact-container">
        <h3 className="contact-card-greeting">erickirberger@gmail.com</h3>
      </div>
      <div className="contact-info-container">
        <p className="contact-card-content">
          Send me a message and I'll get back to you as soon as I can.
        </p>
      </div>
    </div>
  );
}
