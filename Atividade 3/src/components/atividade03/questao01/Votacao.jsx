import { useState, useEffect } from "react";


const Votacao = ({ cidade1, cidade2, cidade3, cidade4 }) => {

    let [votosCidade1, setVotosCidade1] = useState(0);
    let [votosCidade2, setVotosCidade2] = useState(0);
    let [votosCidade3, setVotosCidade3] = useState(0);
    let [votosCidade4, setVotosCidade4] = useState(0);
    let [cidadeMais, setCidadeMais] = useState("");
    let [cidadeMenos, setCidadeMenos] = useState("");

    let nomes = [cidade1, cidade2, cidade3, cidade4];
    let votos = [votosCidade1, votosCidade2, votosCidade3, votosCidade4];

    function verificaCidadeMais() {
        let cidadeMaisVotada = votos[0];
        let nomeCidadeMaisVotada = nomes[0];
        for (let i=0;i<votos.length;i++){
            if (votos[i]>cidadeMaisVotada){
                cidadeMaisVotada = votos[i];
                nomeCidadeMaisVotada = nomes[i];
            }
        }
        let nomesCidadesMaisVotadas = "";
        for (let i=0;i<votos.length;i++){
            if (cidadeMaisVotada == votos[i]){
                nomesCidadesMaisVotadas += " "+nomes[i];
            }
        }
        setCidadeMais(nomesCidadesMaisVotadas);
    }

    function verificaCidadeMenos() {
        let cidadeMenosVotada = votos[0];
        let nomeCidadeMenosVotada = nomes[0];

        
        for (let i=0;i<votos.length;i++){
            if (votos[i]<cidadeMenosVotada){
                cidadeMenosVotada = votos[i];
                nomeCidadeMenosVotada = nomes[i];
            }
        }

        let nomesCidadesMenosVotadas = "";
        for (let i=0;i<votos.length;i++){
            if (cidadeMenosVotada == votos[i]){
                nomesCidadesMenosVotadas += " "+nomes[i];
            }
        }
        setCidadeMenos(nomesCidadesMenosVotadas);
    }

    useEffect( ()=> {
        verificaCidadeMais();
        verificaCidadeMenos();
    }
        , votos
    )

    return (
        <div>
            <h1>Questão 1</h1>
            <h2>{cidade1}: {votosCidade1}.</h2>
            <h2>{cidade2}: {votosCidade2}.</h2>
            <h2>{cidade3}: {votosCidade3}.</h2>
            <h2>{cidade4}: {votosCidade4}.</h2>
            
            <div className="botoes">
                <button onClick={() => { setVotosCidade1((anterior)=>anterior+1) }}>Votar em {cidade1}.</button>
                <button onClick={() => { setVotosCidade2((anterior)=>anterior+1) }}>Votar em {cidade2}.</button>
                <button onClick={() => { setVotosCidade3((anterior)=>anterior+1) }}>Votar em {cidade3}.</button>
                <button onClick={() => { setVotosCidade4((anterior)=>anterior+1) }}>Votar em {cidade4}.</button>
            </div>

            <div>
                <p>Mais votada(s): {cidadeMais}.</p>
                <p>Menos votada(s): {cidadeMenos}.</p>
            </div>
        </div>
    )
}

export default Votacao