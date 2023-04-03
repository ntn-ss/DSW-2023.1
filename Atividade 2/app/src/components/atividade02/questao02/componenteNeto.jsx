import { useContext } from "react"
import PokemonContexto from "./meuContexto"

const Neto = () => {
    const numero = useContext(PokemonContexto)
    return (
        <div>
            <img src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${numero+2}.png`} alt={`Pokémon ${numero+2}`} style={{ width : 250 }}/>
        </div>
    )
}

export default Neto