import React from "react";
import classes from "./TodoListPage.module.css";
import TodoList from "../components/Todo/TodoList";

import { useSelector } from "react-redux";

const TodoListPage = (props) => {
  const items = useSelector((state) => state.todo.items);
  const emptyList = items.length === 0;
  return (
    <div className={classes.listPage}>
      <h1 className={classes.heading}>TODO LIST</h1>
      {items.map((item, index) => {
        return (
          <TodoList
            key={index}
            id={item.id}
            name={item.name}
            complete={item.complete}
            selected={item.selected}
          />
        );
      })}
      {emptyList ? <p className={classes.empty}>Your List Is Empty</p> : ""}
    </div>
  );
};

export default TodoListPage;
