import { useEffect, useState } from 'react'

function BlocCard() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((result) => result.json())        
        .then((result) => console.log(result) || setCharacters(result)) 
    }, [])

  return (
      <>
        <div>je vais</div>
      </>
    )
  }
  
  export default BlocCard