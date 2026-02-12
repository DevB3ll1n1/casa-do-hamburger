import { createBrowserRouter, Outlet } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import Pedidos from "./pages/Pedidos";

const Layout = () => {
  return (
    <div className="bg-[#161410] flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

//O que estiver fora não tera o layout superior
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
