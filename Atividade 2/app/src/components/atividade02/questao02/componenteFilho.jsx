import { useContext } from "react"
import Neto from "./componenteNeto"
import PokemonContexto from "./meuContexto"

const Filho = () => {
    const numero = useContext(PokemonContexto)
    return (
        <div>
            <img src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${numero+1}.png`} alt={`Pokémon ${numero+1}`} style={{ width : 250 }}/>
            <Neto></Neto>
        </div>
    )
}

export default Filho