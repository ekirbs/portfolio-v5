import { useState } from "react";
import { send } from "emailjs-com";
import { validateEmail } from "../../utils/helpers";
import "../../assets/css/contactStyle.css";
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { send } from 'emailjs-com';
// import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

// const styles = {
//   header: {
//     backgroundColor: "rgb(218, 135, 34)",
//     color: "#2c2471",
//     textAlign: "center"
//   },
//   card: {
//     className: "container",
//     backgroundColor: "#2c2471",
//     color: "rgb(218, 135, 34)",
//     marginLeft: "6vw",
//     marginRight: "6vw",
//     marginBottom: "2vh",
//     padding: "2vh",
//     marginTop: "6vh",
//     textAlign: "center"
//   }

// }

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formInput, setFormInput] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [sumbitted, setSubmit] = useState(false)

  const handleInputChange = (e) =>
    setFormInput({ ...formInput, [e.target.from_name]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formInput.reply_to) || !formInput.from_name) {
      setErrorMessage(
        "Either you didn't enter a name, or the email address you entered is invalid."
      );
      return;
    }
    console.log('submitting')
    send(
      'service_3khjmam',
      'template_ikuskwe',
      formInput,
      // 'User ID'
      '0RxlZ4mD90QgJogVU'
    )
      .then((response) => {
        alert(`Welcome to the jungle, ${formInput.from_name}!`);
        console.log('SUCCESS!', response.status, response.text);
        setSubmit(true)
        setFormInput({
          from_name: '',
          reply_to: '',
          message: '',
        })
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };



}



// export default function Contact() {
//   const [toSend, setToSend] = useState({
//     from_name: '',
//     // to_name: '',
//     message: '',
//     reply_to: '',
//   });

//   const [sumbitted, setSubmit] = useState(false)

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log('submitting')
//     send(
//       'service_ajukc9e',
//       'template_1b5s22k',
//       toSend,
//       // 'User ID'
//       '0RxlZ4mD90QgJogVU'
//     )
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         setSubmit(true)
//         setToSend({
//           from_name: '',
//           // to_name: '',
//           message: '',
//           reply_to: '',
//         })
//       })
//       .catch((err) => {
//         console.log('FAILED...', err);
//       });
//   }
//   const handleChange = (e) => {
//     setToSend({ ...toSend, [e.target.name]: e.target.value });
//   };

  return (
    <div style={styles.card}>
      <h1>Contact Page</h1>
      {sumbitted ? <h1>Sent!</h1> :
        <>
          <br></br>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="textarea" placeholder="Please enter your name" name="from_name" value={toSend.from_name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail address</Form.Label>
              <Form.Control type="email" name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} name='message'
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange} required />
            </Form.Group>
            <Button style={{
              margin: 10, color: "#2c2471",
              backgroundColor: "rgb(218, 135, 34)"
            }} type="submit">
              Submit
            </Button>
          </Form>
        </>
      }
    </div>
  );
// }