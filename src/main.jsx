import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './routes/Root';
import Body from './routes/components/Body/Body';
import Signup from './routes/components/Body/Signup';
import Login from './routes/components/Body/Login';
import Home from './routes/components/Body/Home';

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/Body",
    element: <Body/>
  },
  {
    path: "/Signup",
    element: <Signup/>
  },
  {
    path: "/Login",
    element: <Login/>
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
