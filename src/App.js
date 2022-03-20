import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import store from "./redux/store";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
function App() {
  return (
    <>
      <Provider store={store}>
        <TodoForm />
        <TodoList/>
      </Provider>
    </>
  );
}

export default App;
