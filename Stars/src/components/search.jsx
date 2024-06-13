import Header from "./header"
import { useEffect, useState } from "react"

function Search() {
    const [starwarsSearch, setStarwarsSearch] = useState([]);

    useEffect(() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((result)=> result.json())
        .then((result)=> setStarwarsSearch(result));
    }, [])
    return (
      <>
      
       <div>
       <Header />
        Je suis dans recherche
        {starwarsSearch.map(element => {
            return <div>
                <p>{element.name}</p>
            </div>
        })}
       </div>
      </>
    )
  }
  
  export default Search
  