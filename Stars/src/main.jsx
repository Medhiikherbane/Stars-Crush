import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Search from './components/search.jsx'
import CharactersDetails from './components/detailcard.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"search",
    element:<Search />
  },
  {
    path: "/characters/:id",
    element: <CharactersDetails />,
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
