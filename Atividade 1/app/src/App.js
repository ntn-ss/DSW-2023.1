import './App.css';

import Pai from './components/atividade01/questao01/01Pai';
import * as PC from './components/atividade01/02MeuPC';
import { World, Arena } from './components/atividade01/03Batalha';

function App() {
  return (
    <div className='App'>
      <Pai />

      <PC.PlacaMae nome="Asus TUF Gaming X570" preco="9999,99" />
      <PC.Memoria nome="Galax Gamer II 8GB" preco="9999,99"/>
      <PC.PlacaDeVideo nome="GeForce GTX 3080" preco="9999,99"/>
      
      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>

    </div>
  );
}

export default App;
