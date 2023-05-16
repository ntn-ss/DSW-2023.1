import { useState } from "react";

// Inicializa o componente com um ID passado por props.
const Questao2 = ({ id }) => {
  // Cria os estados. O isFrente é um booleano que mudará conforme o botão é clicado, graças ao "handleVirada". O image corresponde ao src da tag img.
  const [isFrente, setIsFrente] = useState(true);
  const [image, setImage] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  );

  const handleVirada = () => {
    // Se for um, virará o outro.
    if (isFrente == true) {
      setIsFrente(false);
      // Muda o estado da imagem na função também.
      setImage(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
      );
    }
    if (isFrente == false) {
      setIsFrente(true);
      // Muda o estado da imagem na função também.
      setImage(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      );
    }
    console.log(isFrente);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={image} style={{ width: "300px" }} />
      <button onClick={handleVirada}>Virar</button>
    </div>
  );
};

export default Questao2;
