import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";
export default function Todo({ todo, id }) {
  let dispatch = useDispatch();
  return (
    <div className="todo">
      <p>{todo}</p>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
      ></i>
    </div>
  );
}
