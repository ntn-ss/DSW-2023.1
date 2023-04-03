import Filho from "./componenteFilho"
import PokemonContexto from "./meuContexto";

const Avo = () => {
    const numero = 1;
    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <img src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${numero}.png`} alt={`Pokémon ${numero}`} style={{ width : 250 }}/>
                <Filho/>
            </div>
        </PokemonContexto.Provider>
    )
}

export default Avo