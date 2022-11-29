import React, { useState } from "react";
import classes from "./Header.module.css";
import HeaderContent from "./HeaderContent";

import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const menuHandler = () => {
    setMobile((prevState) => !prevState);
  };
  return (
    <header className={classes.header} id="header">
      <nav className={classes.nav}>
        <h3>Aleksa.</h3>
        <ul className={mobile ? classes.response : ""}>
          <li>
            <Link
              to="header"
              smooth={true}
              spy={true}
              offset={100}
              duration={800}
              activeClass={classes.active}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              spy={true}
              offset={-100}
              duration={800}
              activeClass={classes.active}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              spy={true}
              offset={-100}
              duration={800}
              activeClass={classes.active}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              spy={true}
              offset={-100}
              duration={800}
              activeClass={classes.active}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              spy={true}
              offset={100}
              duration={800}
              activeClass={classes.active}
            >
              Contact
            </Link>
          </li>
        </ul>
        {mobile ? (
          <AiOutlineClose onClick={menuHandler} className={classes.menu} />
        ) : (
          <FiMenu onClick={menuHandler} className={classes.menu} />
        )}
      </nav>

      <HeaderContent />
    </header>
  );
};

export default Header;
