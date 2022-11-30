import React from "react";
import classes from "./TodoPage.module.css";

import TodoForm from "../components/Todo/TodoForm";

const TodoPage = () => {
  return (
    <section className={classes.todoPage}>
      <h1 className={classes.heading}>TODO FORM</h1>
      <TodoForm />
    </section>
  );
};

export default TodoPage;
