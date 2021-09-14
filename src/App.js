import React, { useState } from "react";
import { AddMotoForm } from "./components/AddMotoForm";
import TablaMotos from "./components/TablaMotos";

function App() {

  const [motos, setMoto] = useState({});

  //Agregar usuarios
  const addMoto = (moto) => {
    setMoto([
      ...motos, moto
    ])
  }

  return (
    <div className="App">
    <h3>Crear moto</h3>
      <AddMotoForm addMoto={addMoto} />
      <TablaMotos/>
    </div>
  );
}

export default App;
