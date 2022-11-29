import React from "react";
import classes from "./Skills.module.css";

import { AiFillCheckCircle } from "react-icons/ai";

const Skills = () => {
  return (
    <section className={classes.skills} id="skills">
      <h3>Skills</h3>

      <div className={classes.SkillsBox}>
        <div className={classes.skillsLeft}>
          <h4>Hard Skills</h4>

          <div className={classes.skillsLeftRightBoxWrapper}>
            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>HTML</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>CSS</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>BootsTrap</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>JavaScript</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>JQuery</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>React js</p>
            </div>
          </div>
        </div>

        <div className={classes.skillsRight}>
          <h4>Soft Skills</h4>

          <div className={classes.skillsLeftRightBoxWrapper}>
            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>Communicative</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>Creative</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>Ambitious</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>Organized</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>Adaptable</p>
            </div>

            <div className={classes.skillsLeftRightBox}>
              <AiFillCheckCircle className={classes.badge} />
              <p>Motivated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
