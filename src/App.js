import './App.css';
import Header from "./components/Header"
import Button from "./components/Button"
import Todos from "./components/Todos"
import TodoItem from "./components/TodoItem"
import NewTodo from "./components/NewTodo"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Header/>
          <Todos/>
          <TodoItem/>
          <NewTodo/>
          <Button/>
        </p>
      </header>
    </div>
  );
}

export default App;
