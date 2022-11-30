import React from "react";
import classes from "./TodoList.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../../store/todo-slice";
import UpdateTodo from "./UpdateTodo";

import Backdrop from "../UI/Backdrop";

const TodoList = (props) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(
      todoAction.toggleDeleted({ id: props.id, selected: !props.selected })
    );

    setInterval(() => {
      dispatch(todoAction.removeTodo({ id: props.id }));
    }, 1500);
  };

  const updateItemHandler = () => {
    dispatch(
      todoAction.toggle({
        key: props.id,
        id: props.id,
        complete: !props.complete,
      })
    );
  };

  return (
    <div
      className={classes.todo}
      style={{ backgroundColor: props.complete ? "lightgreen" : "" }}
    >
      <h2 style={{ textDecoration: props.selected ? "line-through" : "" }}>
        {props.name}
      </h2>
      {props.complete && (
        <div>
          <Backdrop>
            <UpdateTodo id={props.id} />
          </Backdrop>
        </div>
      )}

      <div className={classes.iconBox} onClick={updateItemHandler}>
        <BsPencilSquare className={classes.icon} />
      </div>

      <div className={classes.iconBox} onClick={removeItemHandler}>
        <FaTrashAlt className={classes.icon} />
      </div>
    </div>
  );
};

export default TodoList;
