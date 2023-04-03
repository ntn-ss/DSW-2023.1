import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {
    return (
        <ColorTheme.Consumer>
            {
                (cores) => {
                    return (
                        <div>
                            <h1 style={{ color: cores.bkgD }}>
                                Contexto D
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextD