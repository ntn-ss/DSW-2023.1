import './App.css';
import MeusDados from './components/atividade00/01MeusDados';
import MeusDados2 from './components/atividade00/02MeusDados';
import Temperatura from './components/atividade00/03Temperatura';

function App() {
  return (
    <div className = "App">
      <MeusDados />
      <MeusDados2 nome="Nathan" curso="Design Digital" universidade="UFC"/>
      <Temperatura />
    </div>
  );
}

export default App;