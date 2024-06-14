import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Search from './components/search.jsx'
import './index.css'
import CreatProfil from './components/CreatProfil.jsx'

const router = createBrowserRouter([
  {
    path: "/creatProfil",
    element: <CreatProfil />
  },
  {
    path: "/",
    element: <App />
  }
]


)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
