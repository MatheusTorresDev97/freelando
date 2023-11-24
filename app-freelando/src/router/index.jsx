import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../paginas/LayoutBase";
import PaginaInicial from "../paginas/PaginaInicial";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutBase />,
        ErrorBoundary: <h1>Página Nao Encontrada</h1>,
        children: [
            {
                path: "",
                element: <PaginaInicial />
            },
        ]
    }
])