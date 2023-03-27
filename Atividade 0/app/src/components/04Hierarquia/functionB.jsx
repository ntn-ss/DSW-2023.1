import FunctionA from "./functionA";

const FunctionB = ({sobrenome}) => {
    return (
        <div>
            <h1>Componente B</h1>
            <FunctionA nome="Zeca" sobrenome={sobrenome} />
        </div>
    )
}

export default FunctionB