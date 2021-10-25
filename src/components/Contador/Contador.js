import React from 'react'
import styles from './Contador.module.css'

const Contador = ({fondo}) => {
const [contador, setContador] = React.useState(0)

const aumenta = ()=> setContador(contador + 1)
const disminuye = ()=> setContador(contador - 1)


  return (
    <div>
      <h1 className={contador > 0 ? `${styles.positive}` : `${styles.negative}`}>Contador: {contador}</h1>
      <hr/>
      <div>
        <button onClick={()=> aumenta()} id={styles.button} className={`${fondo}` === "Claro" ? "dark-mode" : "light-mode"}>Aumenta</button>
        <button onClick={()=> disminuye()} id={styles.button} className={`${fondo}` === "Claro" ? "dark-mode" : "light-mode"}>Disminuye</button>
      </div>
    </div>
  )
}

export default Contador
