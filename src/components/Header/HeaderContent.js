import React from "react";
import classes from "./HeaderContent.module.css";
import Logo from "../../assets/Images/Aleksa-Logo.png";

import Button from "../UI/Button";
import SocialMedia from "../UI/SocialMeadia";

const HeaderContent = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.heroLeft}>
        <h1>
          I'm <span>Aleksa</span> Milunovic
        </h1>
        <p>A Front-End Developer</p>

        <SocialMedia />
      </div>
      <div className={classes.heroRight}>
        <img src={Logo} alt="Aleksa Logo" />
      </div>
    </section>
  );
};

export default HeaderContent;
