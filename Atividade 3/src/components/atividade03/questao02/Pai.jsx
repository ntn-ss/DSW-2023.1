import { useState } from "react";
import FilhoA from "./FilhoA";
import FilhoB from "./FilhoB";
import FilhoC from "./FilhoC";



const Pai = ( array=[] ) => {
    // let [maior, setMaior] = useState();
    // let [menor, setMenor] = useState();
    // let [media, setMedia] = useState();

    return (
        <div>
            <h1>Questão 2</h1>
            <FilhoA array={array}/>
            <FilhoB array={array}/>
            <FilhoC array={array}/>
        </div>
    )
}

export default Pai