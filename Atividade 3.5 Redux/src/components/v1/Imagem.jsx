const Imagem = ( {id} ) => {
    return (
        <>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Sprite Pokémon" style={{width: 400}}/>
        </>
    )
}

export default Imagem