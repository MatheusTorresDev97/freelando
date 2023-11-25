import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ProvedorTema } from "./componentes/ProvedorTema";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { SessaoUsuarioProvider } from "./contexto/SessaoUsuario";

const App = () => {
  return (
    <ProvedorTema>
      <Estilos />
      <SessaoUsuarioProvider>
        <RouterProvider router={router} />
      </SessaoUsuarioProvider>
    </ProvedorTema>
  );
};

export default App;
