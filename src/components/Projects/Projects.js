import React, { useState } from "react";
import classes from "./Projects.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import Image1 from "../../assets/Images/home.png";
import Image2 from "../../assets/Images/form.png";
import Image3 from "../../assets/Images/list.png";
import TodoImage from "../../assets/Images/TODOAPP.png";

const images = [
  {
    url: Image1,
  },
  {
    url: Image2,
  },
  {
    url: Image3,
  },
  {
    url: TodoImage,
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  const leftArrowHandler = (e) => {
    e.preventDefault();

    const firstSlide = index === 0;
    const newSlide = firstSlide ? images.length - 1 : index - 1;
    setIndex(newSlide);
  };

  const rightArrowHandler = (e) => {
    e.preventDefault();

    const lastSlide = index === images.length - 1;
    const newSlide = lastSlide ? 0 : index + 1;
    setIndex(newSlide);
  };

  return (
    <section className={classes.projects} id="projects">
      <h3>Projects</h3>
      <div className={classes.ProjectBox}>
        <div className={classes.ProjectBoxLetf}>
          <div className={classes.ProjectBoxLetfHeading}>
            <h4>Projects</h4>
          </div>
          <div className={classes.ProjectBoxLetfContent}>
            <ul>
              <li>Wordpress portal creation</li>
              <li>
                SQL - Creating databases to support airport business
                automatization
              </li>
              <li>
                CRM - Creating CRM systems for companies, open source SuiteCRM
              </li>
              <li>C# - Making an app</li>
              <li>Projects in PhotoShop</li>
            </ul>
          </div>
        </div>
        <div className={classes.ProjectBoxRight}>
          <div className={classes.ProjectBoxRightWrapper}>
            <img src={images[index].url} alt="Carousel Images" />
            <div className={classes.carouselCaption}>
              <p>Projects</p>
            </div>
          </div>

          <div className={classes.actions}>
            <a onClick={leftArrowHandler} href="#" className={classes.left}>
              <AiOutlineArrowLeft />
            </a>
            <a onClick={rightArrowHandler} href="#" className={classes.right}>
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
