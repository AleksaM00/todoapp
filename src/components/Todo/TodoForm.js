import React, { useState } from "react";
import classes from "./TodoForm.module.css";
import TodoList from "./TodoList";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../../store/todo-slice";

const TodoForm = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todo.items);
  const [inputTodo, setInputTodo] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (e) => {
    setInputTodo(e.target.value);

    if (e.target.value.trim().length !== 0) {
      setIsValid(true);
    }
  };

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (inputTodo.trim().length === 0) {
      setIsValid(false);
      return;
    }

    dispatch(
      todoAction.addTodo({
        // id: items[items.length - 1].id + 1,
        name: inputTodo,
        id: Math.random() * 1000,
        complete: false,
      })
    );
    setInputTodo("");
  };

  const deleteAllHandler = () => {
    dispatch(todoAction.deleteAll({ id: props.id }));
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.numTasks}>
        Number of Tasks <span>{items.length}</span>
      </h1>
      <form className={classes.tasks} onSubmit={addTodoHandler}>
        <input
          onChange={inputHandler}
          type="text"
          value={inputTodo}
          placeholder="Type a Todo"
          maxLength="30"
          className={!isValid ? classes.invalid : ""}
        />
        <Button text="Add" />
      </form>
      {!isValid ? <p>Please fill input field </p> : ""}

      <ul className={classes.task}>
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
      </ul>
      <Button text="Delete All Tasks" onClick={deleteAllHandler} />
    </div>
  );
};

export default TodoForm;
