import React from "react";
import classes from "./About.module.css";
import Button from "../UI/Button";

import { Link } from "react-scroll";
import { SlBadge } from "react-icons/sl";
import { BsGearFill } from "react-icons/bs";
import Logo from "../../assets/Images/Aleksa-Logo.png";
import CV from "../../assets/Aleksa-Resume.pdf";

const About = () => {
  return (
    <section className={classes.about} id="about">
      <h3>About Me</h3>

      <div className={classes.AboutBox}>
        <div className={classes.aboutLeft}>
          <img src={Logo} alt="Logo" />
        </div>

        <div className={classes.aboutRight}>
          <div className={classes.aboutRightBoxWrapper}>
            <div className={`${classes.aboutRightBox} ${classes.box1}`}>
              <SlBadge className={classes.badge} />
              <p className={classes.heading}>Education</p>
              <p>ITS, Comtarde</p>
              <p>5/2021 - 06/2021</p>
            </div>

            <div className={`${classes.aboutRightBox} ${classes.box2}`}>
              <BsGearFill className={classes.badge} />
              <p className={classes.heading}>Job</p>

              <p>OS Kosovski Bozur</p>
              <p>5/2021 - 06/2021</p>
            </div>
          </div>

          <p className={classes.paragraf}>
            Easily adaptable to different program surroundings. Organized and
            precise in handling work activities. Ambitious in the field of
            application design and website development. Excellent communication
            and negotiation skills.
          </p>
          <a href={CV} download={CV} className={classes.download}>
            Download CV
          </a>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            offset={100}
            duration={800}
            activeClass="active"
          >
            <Button text="Contact Me" to="contact" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
