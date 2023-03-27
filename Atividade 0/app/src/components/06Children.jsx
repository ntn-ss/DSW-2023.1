import { Children, cloneElement } from "react"

// V0
/*const Supermercado = ({ children, nome }) => {
  return (
    <div>
      <h1>Mercado {nome}</h1>
      {
        Children.map(
            children,
            (filho) => {
                return (
                    <div style={{backgroundColor: "red"}}>
                        {filho}
                    </div>
                )
            }
        )
      }
    </div>
  )
}*/

// V1
const Supermercado = ({ children, nome }) => {
    return (
      <div>
        <h1>Mercado {nome}</h1>
        {
          Children.map(
              children,
              filho =>
                cloneElement(filho, {supermercado:nome})
              
          )
        }
      </div>
    )
}

const Legume = ({ nome, supermercado }) => {
    return (
        <div>
            <h3>Legume {nome} do Mercado {supermercado}</h3>
        </div>
    )
}

const Fruta = ({ nome }) => {
  return (
    <div>
        <h3>Fruta {nome}</h3>
    </div>
  )
}

const Bebida = ({ nome }) => {
    return (
        <div>
            <h3>Bebida {nome}</h3>
        </div>
    )
}

export { Supermercado, Legume, Fruta, Bebida }
