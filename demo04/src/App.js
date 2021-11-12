
import './App.css';
import BasiqueForm from './componenets/basique-form/basique-form';
// import ComplexeFormV1 from './componenets/compexe-form/complexe-form-v1';
import ComplexeFormV2 from './componenets/compexe-form/complexe-form-v2';

function App() {
  return (
    <div className="App">
      <h1>Demo formulaire</h1>
      <h2> Formulaire basique</h2>
      <BasiqueForm />

      <h2> Formulaire complexe</h2>
      {/* <ComplexeFormV1 /> */}
      <ComplexeFormV2 />
    </div>
  );
}

export default App;
