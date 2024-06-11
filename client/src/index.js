import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from "./components/layout"
import Error from "./pages/error"
import Home from "./pages/home"
import Register from './pages/register';
import Login from './pages/signIn';
import Logout from './pages/signOut';
import Landing from './pages/landing'
import UserProvider from './context/userContext';

const router= createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><Layout/></UserProvider>,
    errorElement: <Error />,
    children: [
      {index: true, element: <Landing />},
      {path: "register", element: <Register />},
      {path: "login", element: <Login />},
      {path: "logout", element: <Logout />},
      {path: "home", element: <Home />}
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);