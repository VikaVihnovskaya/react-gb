
import './App.css';
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message name='Vika' text='Belarus'/>
      <Message name='Tanya' text='Russia'/>
      <Message name='Sasha' text='Poland'/>
    </div>
  );
}

export default App;
