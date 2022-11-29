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
      >
        <FaInstagram />
      </a>
      <a
        className={classes.sm2}
        href="https://www.linkedin.com/in/aleksa-milunovic-49440024a/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a className={classes.sm3} href="https://github.com/" target="_blank">
        <BsGithub />
      </a>
    </section>
  );
};

export default SocialMedia;
