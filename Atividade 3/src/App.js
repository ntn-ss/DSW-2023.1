import './App.css';
import Votacao from './components/atividade03/questao01/Votacao';

function App() {
  return (
    <div className='App'>
      <Votacao cidade1="Horizonte" cidade2="Quixadá" cidade3="Acopiara" cidade4="Tóquio"/>
    </div>
  );
}

export default App;