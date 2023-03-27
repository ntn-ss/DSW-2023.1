const Filho = ({peso, altura}) => {
    let imc = Math.round((peso/(altura*altura))*100)/100
    function veredito(imc){
        if (imc < 18) {
            return (
                <span>
                    <b>você está abaixo do peso.</b>
                </span>
            )
        }
        else if (imc > 25) {
            return (
                <span>
                    <b>você está acima do peso.</b>
                </span>
            )
        }
        else {
            return (
                <span>
                    <b>
                        você está dentro do peso ideal.
                    </b>
                </span>
            )
        }
    }
    return (
        <div>
            <h1>Seu peso é {peso}. Sua altura é {altura}. Seu IMC é de {imc} e {veredito(imc)}</h1>
        </div>
    )
}

export default Filho