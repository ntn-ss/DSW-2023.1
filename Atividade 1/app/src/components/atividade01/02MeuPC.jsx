const PlacaMae = ({nome, preco}) => {
    return (
        <div>
            <h2>Sou uma placa-mãe. Nome: {nome}. Preço: R$ {preco}.</h2>
        </div>
    )
}

const Memoria = ({nome, preco}) => 
    <div>
        <h2>Sou uma memória. Nome: {nome}. Preço: R$ {preco}.</h2>
    </div>

const PlacaDeVideo = ({nome, preco}) =>
    <div>
        <h2>Sou uma placa de vídeo. Nome: {nome}. Preço: R$ {preco}.</h2>
    </div>

export {PlacaMae , Memoria, PlacaDeVideo}