import React from "react";
import { FormMoto } from "./components/FormMoto";
import List  from "./components/List";
import { StoreProvider } from "./store/store"

function App() {

  return (
    <div className="App">
      <StoreProvider>
        <FormMoto/>
        <List/>
      </StoreProvider>
    </div>
  );
}

export default App;
