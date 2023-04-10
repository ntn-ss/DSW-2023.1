const FilhoC = (array) => {
    
    function verificaMedia(array) {
        let soma = 0;
        for (let i = 0; i<array.length; i++){
            soma += array[i];
        }
        let media = soma/array.length;
        return media;
    }

    return(
        <div>
            <h2>A média é {verificaMedia(array)}. </h2>
        </div>
    )
}

export default FilhoC