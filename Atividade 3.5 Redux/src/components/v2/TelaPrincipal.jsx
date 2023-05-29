import Imagem from "./Imagem"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import { useState } from "react"

export const TelaPrincipal = () => {

    const [id, setId] = useState(1)
    
    const incrementar = () => {
        console.log(id);
        setId( (prev) => prev+1 );
    }

    const decrementar = () => {
        console.log(id);

        setId( (prev) => prev-1 );
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Imagem id={id}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoDecrementar incrementar={incrementar}/>
                        </td>
                            <td>
                                <BotaoIncrementar decrementar={decrementar}/>
                            </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

// export default TelaPrincipal