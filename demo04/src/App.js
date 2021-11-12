
import './App.css';
import BasiqueForm from './componenets/basique-form/basique-form';
import ComplexeFormV1 from './componenets/compexe-form/complexe-form-v1';

function App() {
  return (
    <div className="App">
      <h1>Demo formulaire</h1>
      <h2> Formulaire basique</h2>
      <BasiqueForm />

      <h2> Formulaire complexe</h2>
      <ComplexeFormV1 />
    </div>
  );
}

export default App;
