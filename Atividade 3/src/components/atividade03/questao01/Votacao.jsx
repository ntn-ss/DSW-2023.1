import { useState, useEffect } from "react";


const Votacao = ({ cidade1, cidade2, cidade3, cidade4 }) => {

    let [votosCidade1, setVotosCidade1] = useState(0);
    let [votosCidade2, setVotosCidade2] = useState(0);
    let [votosCidade3, setVotosCidade3] = useState(0);
    let [votosCidade4, setVotosCidade4] = useState(0);
    let [cidadeMais, setCidadeMais] = useState("");
    let [cidadeMenos, setCidadeMenos] = useState("");

    function verificaCidadeMais() {
        let cidadeMaisVotada = Math.max(votosCidade1, votosCidade2, votosCidade3, votosCidade4);
        if (cidadeMaisVotada === votosCidade1) {
            cidadeMaisVotada = cidade1
        }
        if (cidadeMaisVotada === votosCidade2) {
            cidadeMaisVotada = cidade2
        }
        if (cidadeMaisVotada === votosCidade3) {
            cidadeMaisVotada = cidade3
        }
        if (cidadeMaisVotada === votosCidade4) {
            cidadeMaisVotada = cidade4
        }

        setCidadeMais(cidadeMaisVotada)
    }

    function verificaCidadeMenos() {
        let cidadeMenosVotada = Math.min(votosCidade1, votosCidade2, votosCidade3, votosCidade4);
        if (cidadeMenosVotada === votosCidade1) {
            cidadeMenosVotada = cidade1
        }
        if (cidadeMenosVotada === votosCidade2) {
            cidadeMenosVotada = cidade2
        }
        if (cidadeMenosVotada === votosCidade3) {
            cidadeMenosVotada = cidade3
        }
        if (cidadeMenosVotada === votosCidade4) {
            cidadeMenosVotada = cidade4
        }
        setCidadeMenos(cidadeMenosVotada);
    }

    useEffect( ()=> {
        verificaCidadeMais();
        verificaCidadeMenos();
    }
        , [votosCidade1,votosCidade2,votosCidade3, votosCidade4]
    )

    return (
        <div>
            <h1>Votagem</h1>
            <h2>{cidade1}: {votosCidade1}.</h2>
            <h2>{cidade2}: {votosCidade2}.</h2>
            <h2>{cidade3}: {votosCidade3}.</h2>
            <h2>{cidade4}: {votosCidade4}.</h2>
            
            <div className="botoes">
                <button onClick={() => { setVotosCidade1(votosCidade1+1) }}>Votar em {cidade1}.</button>
                <button onClick={() => { setVotosCidade2(votosCidade2+1) }}>Votar em {cidade2}.</button>
                <button onClick={() => { setVotosCidade3(votosCidade3+1) }}>Votar em {cidade3}.</button>
                <button onClick={() => { setVotosCidade4(votosCidade4+1) }}>Votar em {cidade4}.</button>
            </div>

            <div>
                <p>A cidade mais votada foi {cidadeMais}.</p>
                <p>A cidade menos votada foi {cidadeMenos}.</p>
            </div>
        </div>
    )
}

export default Votacao