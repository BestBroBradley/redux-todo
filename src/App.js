import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
