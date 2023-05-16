import React, { useState, useEffect } from "react";

const Questao3 = () => {
  // Cria um estado que será ocupado pelo futuro resultado em string da requisição.
  const [dados, setDados] = useState(null);
  useEffect(() => {
    //   puxa os dados da API, converte-os para JSON e define o estado acima para a conversão.
    fetch(
      `https://restcountries.com/v3.1/region/europe?fields=capital,population`
    )
      .then((res) => res.json())
      .then((info) => setDados(info));
  }, []);
  return (
    <div className="App">
      <h2>Questão 3</h2>
      <h3>Países da API</h3>
      <ul>
        {/* Se dados existir, mapeie-os em capital e population, com o key sendo a capital para o mapa funcionar sem aviso e renderize os resultados. Não tive tempo para verificar quais estavam acima da média, então vou me dar uma pontuação menor. */}
        {dados &&
          dados.map(({ capital, population }) => (
            <li key={capital}>
              <p>
                Capital: {capital}, População: {population}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Questao3;
