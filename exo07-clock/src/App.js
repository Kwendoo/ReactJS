import { useState } from 'react';
import './App.css';
import Clock from './component/clock/clock';
import DateJour from './component/date/date';

function App() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(d => !d);
  }


  return (
    <div className="App">
      <h1>Exo 06</h1>
      
      <button onClick={handleDisplay}>Changer l'affichage</button>
      {display ? <Clock /> : <DateJour />}
    </div>
  );
}

export default App;
