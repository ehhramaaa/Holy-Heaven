// import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Service from './pages/service'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import './App.css'

function App() {
  return (
    <>
    <RouterProvider router={
      createBrowserRouter([
        {
          path:"/",
          element: < Home/>
        },
        {
          path:"/about",
          element: < About/>
        },
        {
          path:"/service",
          element: < Service />
        },
        {
          path:"/portfolio",
          element: < Portfolio/>
        },
        {
          path:"/contact",
          element: < Contact/>
        },
      ])
    }/>
    </>
  )
}

export default App
