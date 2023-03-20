const Temperatura = () => {
    function celsiusParaFahrenheit(c) {
        return(
                (c+32)*1.8
        )
    }
    
    function fahrenheitParaCelsius (f) {
        return (
            (f-32)/1.8
        )   
    }
    
    function kelvin(k) {
        return (
            <span>
                em Celsius, dá {k+273}. em Fahrenheit, dá {k-273}.
            </span>
        )
    }
    return (
        <div>
            <h1>20 graus Celsius para Fahrenheit dá {celsiusParaFahrenheit(20)}.</h1>
            <h1>70 graus em Fahrenheit para Celsius dá {fahrenheitParaCelsius(70)}.</h1>
            <h1>300 graus em Kelvin, {kelvin(300)}</h1>
        </div>
    )
}

export default Temperatura