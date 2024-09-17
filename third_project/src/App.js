
import './App.css';
import TemperatureConverter from "./components/TemperatureConverter/TemperatuteConverter";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
      <div className="container">
        <div className="converter" style={{maxWidth: 400}}>
          <TemperatureConverter/>
        </div>
        <div className="list" style={{maxWidth: 400}}>
          <TodoList />
        </div>
      </div>


)
  ;
}

export default App;
