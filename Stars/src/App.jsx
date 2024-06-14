import { useState } from 'react'
import Header from './components/header'
import './App.css'
import React from 'react'
import { Link } from "react-router-dom"
function App() {


  return (
    <>
      <div>
        <Link className="link_item_clic" to="/creatProfil" >Create your profil</Link>

      </div>
      <div>
        <Header />
      </div>

    </>
  )
}

export default App
