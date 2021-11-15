import './App.css';
import PeopleList from './components/people-list';
import PeopleListV2 from './components/people-list-v2';
import { nanoid } from 'nanoid'
import ProductTable from './exercice/exo2/product-table';

function App() {

  const people = [
    {id: nanoid(),firstname: 'Zaza', lastname: 'Vanderquack'},
    {id: nanoid(),firstname: 'Riri', lastname: 'Duck'},
    {id: nanoid(),firstname: 'Balthazar', lastname: 'Picsou'},
    {id: nanoid(),firstname: 'Donald', lastname: 'Duck'},
    {id: nanoid(),firstname: 'Gontran', lastname: 'Bonheur'},
    {id: nanoid(),firstname: 'Della', lastname: 'Duck'}
  ]

  const products = [
    {id: nanoid(), name: 'Chocolat', price: 2},
    {id: nanoid(), name: 'Pasta', price: 3, promo: true},
    {id: nanoid(), name: 'Biscuits', price: 5},
    {id: nanoid(), name: 'Mandarine', price: 2},
    {id: nanoid(), name: 'Gateau', price: 7, promo: true},
  ]

  return (
    <div className="App">
      <h1>Liste de personne</h1>
      <PeopleList data={people} />

      <PeopleListV2 data={people} />

      <h1>Liste de produits:</h1>
      <ProductTable data={products} />
    </div> 
  );
}
export default App;
