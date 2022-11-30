import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>TODO APP</h1>
      <ul>
        <li>
          <NavLink to="/">Home </NavLink>
        </li>
        <li>
          <NavLink to="/todo-page">Todo Form </NavLink>
        </li>

        <li>
          <NavLink to="/todo-list-page">Todo List </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
