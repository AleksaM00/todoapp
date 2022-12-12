import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h4>
        Contact:
        <a href="https://www.linkedin.com/in/aleksa-milunovic/">LinkedIn</a>
        <a href="https://github.com/AleksaM00">GitHub</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </h4>
      <p>Copyright &#169; All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
