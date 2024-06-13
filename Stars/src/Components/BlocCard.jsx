import { useEffect, useState } from 'react'
import './Components/BlocCard.jsx'

function BlocCard() {

    const [Characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((result) => result.json())        
        .then((result) => console.log(result) || setCharacters(result)) 
    }, [])

  return (
      <>
        <div>je vais
            {Characters.map(character => (
                    <div className='imageCharacter'>
                      <img src={character.image} alt={character.name} />
                       <p>{character.name}</p> 
                    </div>
                
            ))}
        </div>
        
      </>
    )
  }
  
  export default BlocCard