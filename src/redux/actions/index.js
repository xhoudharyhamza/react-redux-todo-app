let addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};
let deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
export { addTodo, deleteTodo };
