import React, { useState } from "react";
import classes from "./Contact.module.css";
import emailjs from "emailjs-com";

import Box from "../UI/Box";
import Button from "../UI/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const success = setInterval(() => {
    return <h1 className={classes.success}>Your message is sent </h1>;
  }, 2000);

  const sendContactHandler = (e) => {
    setName("");
    setEmail("");
    setMessage("");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_72dsrac",
        "template_gfe98pf",
        e.target,
        "j0L8mR2EUKhRaE1N5"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setIsValid(true);
  };
  return (
    <section className={classes.contact} id="contact">
      <h3>Contact</h3>
      <div className={classes.ContactBox}>
        <div className={classes.contactBoxLeft}>
          <Box>
            <h4>Email</h4>
            <p>aleksamilunovic2000@gmail.com</p>
          </Box>

          <Box>
            <h4>LinkedIN</h4>
            <a
              href="https://www.linkedin.com/in/aleksa-milunovic/"
              target="_blanc"
            >
              Aleksa Milunovic - LinkedIn
            </a>
          </Box>

          <Box>
            <h4>Contact</h4>
            <p>+381 665235341</p>
          </Box>
        </div>
        <div className={classes.contactBoxRight}>
          <form action="" onSubmit={sendContactHandler}>
            <label htmlFor="">Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
              placeholder="Your Name..."
              required
            />

            <label htmlFor="">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="Your Email..."
              required
            />

            <label htmlFor="">Message:</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message..."
              required
            ></textarea>
            <Button text="Submit" />
            {isValid && success}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
