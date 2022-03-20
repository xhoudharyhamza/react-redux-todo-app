import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../redux/actions/index'
export default function TodoForm() {
  const [todoValue, setTodoValue] = useState("");
  let dispatch= useDispatch()
  let todoHandler = (e) => {
    setTodoValue(e.target.value);
  };
  let todoFormHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoValue))
    setTodoValue("");
  };
  return (
    <div className="container">
      <div className="row todo-form">
        <div className="col-md-6 col-sm-12">
          <h1>Add Your Todo's</h1>
          <form onSubmit={todoFormHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter todo"
                onChange={todoHandler}
                value={todoValue}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
