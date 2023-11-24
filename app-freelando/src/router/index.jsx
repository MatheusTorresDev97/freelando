import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../paginas/LayoutBase";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutBase />,
    }
])