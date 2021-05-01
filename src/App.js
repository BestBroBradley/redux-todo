import './App.css';
import Header from "./components/Header"
import Todos from "./components/Todos"
import NewTodo from "./components/NewTodo"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
          <Todos/>
          <NewTodo/>
      </header>
    </div>
  );
}

export default App;
