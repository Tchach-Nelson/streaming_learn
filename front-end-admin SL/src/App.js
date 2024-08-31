import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Narbar";
import Footer from "./components/footer/Footer";

import Azer from "./components/azer/Azer";

import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/user";
import Product from "./pages/product/product";
import Profs from "./pages/profs/Profs";
import Cours from "./pages/cours/Cours";
import Classe from "./pages/classe/Classe";
import Matiere from "./pages/matiere/Matiere";
import Annonce from "./pages/annonce/Annonce";
import Note from "./pages/note/Note";
import Discipline from "./pages/discipline/Discipline";
import Programme from "./pages/programme/Programme";
import Scolarite from "./pages/scolarite/Scolarite";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/Users/:id",
          element: <User />
        },
        {
          path: "/profs",
          element: <Profs />
        },
        {
          path: "/cours",
          element: <Cours />
        },
        {
          path: "/classes",
          element: <Classe />
        },
        {
          path: "/matieres",
          element: <Matiere />
        },
        {
          path: "/Annonces",
          element: <Annonce />
        },
        {
          path: "/note",
          element: <Note />
        },
        {
          path: "/discipline",
          element: <Discipline />
        },
        {
          path: "/programme",
          element: <Programme />
        },
        {
          path: "/scolarite",
          element: <Scolarite />
        },
        {
          path: "/Products/:id",
          element: <Product />
        },
        {
          path: "/azer",
          element: <Azer />
        },

      ]
    },
    {
      path: "login",
      element: <Login />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;