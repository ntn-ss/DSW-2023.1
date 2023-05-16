import "./App.css";
// import Questao1 from "../src/components/Questao1";
import Questao2 from "../src/components/Questao2";
import Questao3 from "../src/components/Questao3";
function App() {
  return (
    <div className="App">
      <h1>Prova de React</h1>
      {/* <Questao1 /> */}
      <Questao2 id="1" />
      <Questao3 />
    </div>
  );
}

export default App;
