import React from 'react'
import { ProvedorTema } from './components/ProvedorTema'
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