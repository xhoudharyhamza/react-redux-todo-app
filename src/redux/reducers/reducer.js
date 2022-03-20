let initialState = {
  todos: [],
};
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((element, index) => {
          return index != action.payload;
        }),
      };
    default:
      return state;
  }
};
export default reducer;
