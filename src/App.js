import "./App.css";
import Contador from "./components/Contador/Contador";
import React from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [fondo, setFondo] = React.useState("Claro");

  const handleClick = () => {
    fondo === "Claro" ? setFondo("Oscuro") : setFondo("Claro");
  };

  return (
    <div className="App">
      <div>
        <Navbar setFondo={handleClick} fondo={fondo} className="navbar" />
        <hr/>
      </div>
      <header
        id="App-header"
        className={`${fondo}` === "Claro" ? "light-mode" : "dark-mode"}
      >
        <Contador fondo={fondo}/>
      </header>
    </div>
  );
}

export default App;
