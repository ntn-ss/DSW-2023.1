import './App.css';
import Votacao from './components/atividade03/questao01/Votacao';
import Pai from './components/atividade03/questao02/Pai';


function App() {
  return (
    <div className='App'>
      <Votacao cidade1="Horizonte" cidade2="Quixadá" cidade3="Acopiara" cidade4="Tóquio"/>
      <Pai array={[1,2,3,4,5]}/>
    </div>
  );
}

export default App;