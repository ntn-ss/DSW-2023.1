// Cria o componente da questão e puxa o pai
const Questao1 = () => {
  return (
    <div>
      <h1>Questão 1</h1>
      <Questao1X />
    </div>
  );
};

// Pai do filho. Cria o filho passando um vetor de objetos como props
const Questao1X = () => {
  return (
    <div>
      <Questao1Y
        correntistas={[
          { id: 1, nome: "Sicrano", aplic: { pp: 856.4, rf: 50.4, cc: 34.0 } },
          { id: 2, nome: "Beltrano", aplic: { pp: 0.0, rf: 700.67, cc: 800 } },
          { id: 3, nome: "Fulano", aplic: { pp: 5000.0, rf: 0.0, cc: 500 } },
        ]}
      />
    </div>
  );
};

// Filho. Recebe o vetor acima como props e mapeia os resultados. Não sei passá-los para o pai, tentei apenas renderizá-los e não consegui. Depois daqui, não consegui mais fazer, porque o CodeSandbox acusou um erro que eu não consegui resolver ("missing semicolon").
const Questao1Y = ([correntistas]) => {
  return (
      <div>
        {correntistas.map((id, nome, aplic) => (
            <div key={id}>{nome}{aplic}</div>
        ))}
      </div>
};

export default Questao1;