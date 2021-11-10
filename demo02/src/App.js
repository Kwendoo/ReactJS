import './App.css';
import PoepleList from './components/poepleList/poepleList';
function App() {
  const people = [
    {id : 1, firstname: 'Zaza', lastname: 'Vanderquack'},
    {id : 2, firstname: 'Riri', lastname: 'Duck'},
    {id : 3, firstname: 'Balthazar', lastname: 'Picsou'},
    {id : 4, firstname: 'Donald', lastname: 'Duck'},
    {id : 5, firstname: 'Gontran', lastname: 'Bonheur'},
    {id : 6, firstname: 'Della', lastname: 'Duck'}
  ]
  return (
    <div className="App">
      <h1>Liste de personne</h1>
      <PoepleList data={people}/>
    </div>
  );
}
export default App;