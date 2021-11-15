import logo from './logo.svg';
import './App.css';
import AgePrenom from './component/conso-api-agify';
import LiveBoard from './component/trainapi/liveboard';
import SearchBar from './component/trainapi/searchbar';
import { useState } from 'react';

function App() {

  const [station, setStation] = useState(null);
  const handleStation = (station) => {
    setStation(station);
  }
  return (
    <div className="App">
      {/* <AgePrenom prenom = "Liam"/> */}

      <SearchBar msg="Entrez une gare" onSearch={handleStation} />
      <hr/>
      {station && (
          <LiveBoard station = {station}/>
      )}
    </div>
  );
}

export default App;
