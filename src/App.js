import React, { useState } from "react";
import { AddMotoForm } from "./components/AddMotoForm";
import { EditMotoForm } from "./components/EditMotoForm";
import TablaMotos from "./components/TablaMotos";

function App() {

  const [motos, setMoto] = useState([]);

  //Agregar usuarios
  const addMoto = (moto) => {
    setMoto([
      ...motos, moto
    ]);
  }

  //Editar usuario
  const [editing, setEditing] = useState(false);

  const [currentMoto, setCurrentMoto] = useState({
      id: '',
      modelo: '',
      color: '',
      marca: ''
  });

  const editRow = (moto) => {

    setEditing(true);
    setCurrentMoto({
      id: moto.id,
      modelo: moto.modelo,
      color: moto.color,
      marca: moto.marca
    })
  }

  const updateMoto = (marca, updateMoto) => {
    setEditing(false);
    setMoto(motos.map(moto => (moto.marca === marca ? updateMoto : moto)))
  }

  return (
    <div className="App">

      {
        editing ? (
          <div>

            <h3>Edit user</h3>
            <EditMotoForm
              currentMoto={currentMoto}
              updateMoto={updateMoto}
            />
          </div>
        ) : (

          <div>
            <h3>Crear moto</h3>
            <AddMotoForm addMoto={addMoto} />
          </div>
        )
      }

      <TablaMotos
        motos={motos}
        editRow={editRow}
      />
    </div>
  );
}

export default App;
