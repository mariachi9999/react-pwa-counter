import React from 'react'
import styles from './Navbar.module.css'

const Navbar = ({fondo, setFondo}) => {

  return (
    <div className={styles.navbar}>
      <h4>Proyecto Udemy: Contador</h4>
      <button className={`${fondo}` === "Claro" ? "dark-mode" : "light-mode"} onClick={()=>setFondo()}>{fondo}</button>
    </div>
  )
}

export default Navbar
