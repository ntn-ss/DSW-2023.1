const meusDados2 = (props) => {
    const {nome, curso, universidade} = props;
    return (
        <div>
            <h1>Meu nome é: {nome}.</h1>
            <h1>Meu curso é: {curso}.</h1>
            <h1>Minha universidade é: {universidade}.</h1>
        </div>
    )
}

export default meusDados2