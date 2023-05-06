const Temperatura = () => {
    function celsiusParaFahrenheit(c) {
        return(
                (c*1.8)+32
        )
    }
    
    function fahrenheitParaCelsius (f) {
        return (
            (f-32)*5/9
        )   
    }
    
    function kelvin(k) {
        return (
            <span>
                em Celsius, dá {k-273.15}. Em Fahrenheit, dá {(k-273.15)*9/5+32}.
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
