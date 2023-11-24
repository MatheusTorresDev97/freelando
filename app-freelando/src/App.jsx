import React from 'react'
import { RouterProvider } from "react-router-dom";
import { ProvedorTema } from './componentes/ProvedorTema'
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { router } from "./router";

const App = () => {
  return (
    <ProvedorTema>
      <Estilos />
      <RouterProvider router={router} />
    </ProvedorTema>
  )
}

export default App