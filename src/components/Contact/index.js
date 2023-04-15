import { useState } from "react";
import { send } from "emailjs-com";
import { Row, Col } from "react-bootstrap";
import { Map } from "../";
import { validateEmail } from "../../utils/helpers";
import "../../assets/css/contactStyle.css";
// import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formInput, setFormInput] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [submitted, setSubmit] = useState(false);

  const handleInputChange = (e) =>
    setFormInput({ ...formInput, [e.target.from_name]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formInput.reply_to) || !formInput.from_name) {
      setErrorMessage(
        "Either you didn't enter a name, or the email address you entered is invalid."
      );
      return;
    };

    console.log("Sending... 📨");

    send(
      "service_3khjmam",
      "template_ikuskwe",
      formInput,
      // User ID
      "Kpewq1Vl2d7aSMnL3"
    )
      .then((response) => {
        alert(`Welcome to the jungle, ${formInput.from_name}!`);
        console.log("SUCCESS!", response.status, response.text);
        setSubmit(true)
        setFormInput({
          from_name: '',
          reply_to: '',
          message: '',
        })
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <div className="contactCard">
        <Row className="contact-row">
          <Col>
            <Map />
          </Col>
          <Col>
            <div className="contactContainer">
              {submitted ? <h2 className="contactCardGreeting">Thank you {formInput.from_name}!</h2> :          
                <>
                  <div className="contactInfoContainer">
                    <p className="contactCardContent">
                      Send me a message and I'll get back to you as soon as I can.
                    </p>
                  </div>
                  <form className="contactForm">
                    <input
                      value={formInput.from_name}
                      name="name"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Your Name"
                      className="contactArea contactNameArea"
                    />
                    <input
                      value={formInput.reply_to}
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
                </>
              }
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};