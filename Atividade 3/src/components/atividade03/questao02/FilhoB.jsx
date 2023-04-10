const FilhoB = (array) => {
    function verificaMenor(array) {
        let atualMenor = array[0];
        for (let i = 0; i<array.length; i++){
            if (array[i] < atualMenor) {
                atualMenor = array[i];
            }
        }
        return atualMenor;
    }
    
    return(
        <div>
            <h2>O menor da lista é {verificaMenor(array)}.</h2>
        </div>
    )
}

export default FilhoB