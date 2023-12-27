import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/home';
import Html from './Pages/html';
import Css from './Pages/css';
import Javascript from './Pages/javascript';


import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <p>ERROR: this page not found🛑</p>
  },
  {
    path: "/html",
    element: <Html/>,
    errorElement: <p>ERROR: this page not found🛑</p>
  },

  {
    path: "/css",
    element: <Css/>,
    errorElement: <p>ERROR: this page not found🛑</p>
  },

  {
    path: "/javascript",
    element: <Javascript/>,
    errorElement: <p>ERROR: this page not found🛑</p>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

