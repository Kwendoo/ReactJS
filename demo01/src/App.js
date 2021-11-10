import './App.css';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      <Welcome firstname = "Antoine" lastname = "Lagna" />
      <Welcome />
    </div>
  );
}

export default App;
