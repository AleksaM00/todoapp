import React from "react";
import classes from "./SocialMedia.module.css";

import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const SocialMedia = (props) => {
  return (
    <section className={classes.socialMedia}>
      <a
        className={classes.sm1}
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        className={classes.sm2}
        href="https://www.linkedin.com/in/aleksa-milunovic/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        className={classes.sm3}
        href="https://github.com/AleksaM00"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </section>
  );
};

export default SocialMedia;
