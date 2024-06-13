import { useState } from 'react'
import './App.css'
import BlocCard from './component/BlocCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < BlocCard />
    </>
  )
}

export default App
