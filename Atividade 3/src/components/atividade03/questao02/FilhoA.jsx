const FilhoA = (array) => {
    function verificaMaior(array) {
        let atualMaior = array[0];
        for (let i = 0; i<array.length; i++){
            if (array[i] > atualMaior) {
                atualMaior = array[i];
                console.log(array);
                console.log(atualMaior);
            }
        }
        return atualMaior;
    }

    return(
        <div>
            <h2>O maior da lista é {verificaMaior(array)}. </h2>
        </div>
    )
}

export default FilhoA