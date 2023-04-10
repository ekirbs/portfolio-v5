import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../../assets/css/contactStyle.css";

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(formInput);

  const handleInputChange = (e) =>
    setFormInput({ ...formInput, [e.target.name]: e.target.value }); // square brackets in object denotes key

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formInput.email) || !formInput.name) {
      setErrorMessage(
        "Either you didn't enter a name, or the email address you entered is invalid."
      );
      return;
    }

    alert(`Welcome to the jungle, ${formInput.name}!`);
  };

  return (
    <>
      <div className="contactCard">
        <h1 className="contactCardHeading">Contact Me</h1>
        <div className="contactContainer">
          <h3 className="contactCardGreeting">Hi {formInput.name}!</h3>
          <form className="contactForm">
            <input
              value={formInput.name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Your Name"
              className="contactArea contactNameArea"
            />
            <input
              value={formInput.email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Your Email"
              className="contactArea contactEmailArea"
            />
            <textarea
              value={formInput.message}
              name="message"
              onChange={handleInputChange}
              type="textArea"
              placeholder="Text Area"
              className="contactArea contactTextArea"
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleFormSubmit}
            >
              Send It
            </button>
          </form>
          {errorMessage && (
            <div className="error-div">
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <div className="contactInfoContainer">
          <p className="contactCardContent">
            Send me a message and I'll get back to you as soon as I can.
          </p>
        </div>
      </div>
    </>
  );
}
