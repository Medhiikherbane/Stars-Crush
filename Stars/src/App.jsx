import { useState } from 'react'
import Header from './components/header'
import './App.css'
import React from 'react'
import { Link } from "react-router-dom"
import HomePage from './components/HomePage'

function App() {


  return (
    <>
      <div>
        <Header />
        <HomePage />
      </div>

    </>
  )
}

export default App
