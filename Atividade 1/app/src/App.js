import './App.css';
import MeusDados from './atividades/atividade00/01MeusDados';
import MeusDados2 from './atividades/atividade00/02MeusDados';
import Temperatura from './atividades/atividade00/03Temperatura';
import FunctionB from './components/04Hierarquia/functionB';
// import { Header as H, Body as B, Footer as F } from './components/05Multiplo';
import * as Site from './components/05Multiplo';
import {Supermercado, Legume, Fruta, Bebida} from './components/06Children';

function App() {
  return (
    <div className = "App">
      <MeusDados />
      <MeusDados2 nome="Nathan" curso="Design Digital" universidade="UFC"/>
      <Temperatura />
      <FunctionB sobrenome="Pagodinho"/>
      {/* <H />
      <B />
      <F /> */}

      <Site.Header />
      <Site.Body />
      <Site.Footer />

      <Supermercado nome="Mercado">
        <Legume nome = "Batata" />
        <Fruta nome = "Maçã" />
        <Bebida nome = "Café" />
        <Bebida nome = "Cajuína São Geraldo" />
      </Supermercado>
    </div>
  );
}

export default App;