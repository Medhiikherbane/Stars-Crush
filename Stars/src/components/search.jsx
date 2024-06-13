import React, { useEffect, useState } from 'react';
import Header from './header';
import SearchFilter from './SearchFilter';
import './search.css';

const Search = () => {
  const [starwarsData, setStarwarsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://miadil.github.io/starwars-api/api/all.json')
      .then((result) => result.json())
      .then((result) => {
        setStarwarsData(result);
        setFilteredData(result);
      });
  }, []);

  const handleFilterChange = (filters) => {
    const { ageRange, selectedEyeColor, selectedGender, weightRange, heightRange, selectedLocation, selectedSpecies } = filters;

    const filtered = starwarsData.filter((element) => {
      const matchesAge = element.birth_year ? parseInt(element.birth_year) >= ageRange[0] && parseInt(element.birth_year) <= ageRange[1] : true;
      const matchesEyeColor = selectedEyeColor ? element.eye_color === selectedEyeColor : true;
      const matchesGender = selectedGender ? element.gender === selectedGender : true;
      const matchesWeight = element.mass ? parseInt(element.mass) >= weightRange[0] && parseInt(element.mass) <= weightRange[1] : true;
      const matchesHeight = element.height ? parseInt(element.height) >= heightRange[0] && parseInt(element.height) <= heightRange[1] : true;
      const matchesLocation = selectedLocation ? element.homeworld === selectedLocation : true;
      const matchesSpecies = selectedSpecies ? element.species.includes(selectedSpecies) : true;

      return matchesAge && matchesEyeColor && matchesGender && matchesWeight && matchesHeight && matchesLocation && matchesSpecies;
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <Header />
      <SearchFilter onFilterChange={handleFilterChange} data={starwarsData} />
      <div className="search-results">
        {filteredData.map((element) => (
          <div key={element.name} className="search-result">
            <img src={element.image} alt={element.name} className="character-image" />
            <p>{element.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
