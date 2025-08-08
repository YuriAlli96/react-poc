import Teste from "@/pages/Teste";
import Teste2 from "@/pages/Teste2";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Teste />,
  },
  {
    path: "/rota2",
    element: <Teste2 />,
  },
]);

export const Routes = () => <RouterProvider router={router} />;
