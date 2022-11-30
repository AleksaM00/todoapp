import React, { useState } from "react";
import classes from "./UpdateTodo.module.css";
import { useDispatch } from "react-redux";
import { todoAction } from "../../store/todo-slice";

import Modal from "../UI/Modal";
import Button from "../UI/Button";

const UpdateTodo = (props) => {
  const [updated, setUpdated] = useState(true);
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("");

  const inputHandler = (e) => {
    setInputTodo(e.target.value);

    if (e.target.value.trim().length !== 0) {
      setUpdated(true);
    }
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();
    if (inputTodo.trim().length === 0) {
      setUpdated(false);
      return;
    }

    dispatch(todoAction.update({ id: props.id, name: inputTodo }));

    setInterval(() => {
      dispatch(todoAction.toggle({ id: props.id, complete: false }));
    }, 600);
  };

  const closeHandler = () => {
    dispatch(todoAction.toggle({ id: props.id, complete: false }));
  };
  return (
    <Modal>
      <form className={classes.update} onSubmit={updateTodoHandler}>
        <h1>Update Todo</h1>
        <input
          onChange={inputHandler}
          type="text"
          placeholder="Update Text"
          value={inputTodo}
          maxLength="30"
          className={!updated ? classes.invalid : ""}
        />
        {!updated ? <p>Please fill input field</p> : ""}
        <div className={classes.actions}>
          <Button text="Update" className={classes.actionsBtn} />
          <Button text="Close" onClick={closeHandler} />
        </div>
      </form>
    </Modal>
  );
};

export default UpdateTodo;
