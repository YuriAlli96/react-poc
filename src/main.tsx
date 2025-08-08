import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Teste from './pages/Teste';
import Teste2 from './pages/Teste2';

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

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
