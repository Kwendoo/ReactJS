import './App.css';
import Compteur from './components/compteur/compteur';

function App() {
  return (
    <div className="App">
      <Compteur/>
      <Compteur inc={5}/>
      <Compteur inc={15}/>
      <Compteur inc={350}/>
    </div>
  );
}

export default App;
