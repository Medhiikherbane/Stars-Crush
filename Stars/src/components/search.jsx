import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import Header from './header';
import SearchFilter from './SearchFilter';
import './search.css';

const Search = () => {
  const [starwarsData, setStarwarsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://miadil.github.io/starwars-api/api/all.json')
      .then((result) => result.json())
      .then((result) => {
        setStarwarsData(result);
        setFilteredData(result);
        const initialLikeCounts = result.reduce((acc, element) => {
          acc[element.name] = 0;
          return acc;
        }, {});
        setLikeCounts(initialLikeCounts);
      });
  }, []); // <--- Empty dependency array to run only once

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

  const handleMessageClick = (name) => {
    alert(`Message sent to ${name}`);
  };

  const handleLikeClick = (name) => {
    setLikeCounts((prevCounts) => ({
      ...prevCounts,
      [name]: prevCounts[name] + 1,
    }));
  };

  const handleCardClick = (name) => {
    navigate(`/profile/${name}`);
  };

  return (
    <div>
      <Header />
      <SearchFilter onFilterChange={handleFilterChange} data={starwarsData} />
      <div className="search-results">
        {filteredData.map((element) => (
          <div
            key={element.name}
            className="search-result"
            style={{ backgroundImage: `url(${element.image})` }}
            onClick={() => handleCardClick(element.name)}
          >
            <button onClick={(e) => { e.stopPropagation(); handleMessageClick(element.name); }} className="message-button">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handleLikeClick(element.name); }} className="like-button">
              <FontAwesomeIcon icon={faHeart} /> {likeCounts[element.name]}
            </button>
            <p>{element.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
