import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharactersDetails() {
  const [starWarsCharacter, setStarWarsCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
      .then((result) => result.json())
      .then((result) => console.log(result) || setStarWarsCharacter(result));
  }, []);
  return <div> {starWarsCharacter.name} </div>;
}
export default CharactersDetails;