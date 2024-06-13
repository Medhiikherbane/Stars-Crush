import React, { useState, useEffect } from 'react';

const SearchFilter = ({ onFilterChange, data }) => {
  const [ageRange, setAgeRange] = useState([0, 10000]);
  const [selectedEyeColor, setSelectedEyeColor] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [weightRange, setWeightRange] = useState([0, 10000]);
  const [heightRange, setHeightRange] = useState([0, 10000]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');

  const [eyeColorOptions, setEyeColorOptions] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [speciesOptions, setSpeciesOptions] = useState([]);

  useEffect(() => {
    const extractOptions = () => {
      const eyeColorsSet = new Set();
      const gendersSet = new Set();
      const locationsSet = new Set();
      const speciesSet = new Set();

      data.forEach(item => {
        if (item.eye_color) eyeColorsSet.add(item.eye_color);
        if (item.gender) gendersSet.add(item.gender);
        if (item.homeworld) locationsSet.add(item.homeworld);
        if (item.species) speciesSet.add(item.species);
      });

      setEyeColorOptions([...eyeColorsSet]);
      setGenderOptions([...gendersSet]);
      setLocationOptions([...locationsSet]);
      setSpeciesOptions([...speciesSet]);
    };

    extractOptions();
  }, [data]);

  useEffect(() => {
    onFilterChange({ ageRange, selectedEyeColor, selectedGender, weightRange, heightRange, selectedLocation, selectedSpecies });
  }, [ageRange, selectedEyeColor, selectedGender, weightRange, heightRange, selectedLocation, selectedSpecies, onFilterChange]);

  return (
    <div className="search-filter">
      <div>
        <label>Age Range:</label>
        <input
          type="range"
          min="0"
          max="100000"
          value={ageRange[0]}
          onChange={(e) => setAgeRange([e.target.value, ageRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="100000"
          value={ageRange[1]}
          onChange={(e) => setAgeRange([ageRange[0], e.target.value])}
        />
        <span>{ageRange[0]} - {ageRange[1]}</span>
      </div>
      <div>
        <label>Eye Color:</label>
        <select value={selectedEyeColor} onChange={(e) => setSelectedEyeColor(e.target.value)}>
          <option value="">All</option>
          {eyeColorOptions.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
          <option value="">All</option>
          {genderOptions.map(gender => (
            <option key={gender} value={gender}>{gender}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Weight Range (kg):</label>
        <input
          type="range"
          min="0"
          max="200000"
          value={weightRange[0]}
          onChange={(e) => setWeightRange([e.target.value, weightRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="2000000"
          value={weightRange[1]}
          onChange={(e) => setWeightRange([weightRange[0], e.target.value])}
        />
        <span>{weightRange[0]} - {weightRange[1]} kg</span>
      </div>
      <div>
        <label>Height Range (cm):</label>
        <input
          type="range"
          min="0"
          max="2500000"
          value={heightRange[0]}
          onChange={(e) => setHeightRange([e.target.value, heightRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="2500000"
          value={heightRange[1]}
          onChange={(e) => setHeightRange([heightRange[0], e.target.value])}
        />
        <span>{heightRange[0]} - {heightRange[1]} cm</span>
      </div>
      <div>
        <label>Location:</label>
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="">All</option>
          {locationOptions.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Species:</label>
        <select value={selectedSpecies} onChange={(e) => setSelectedSpecies(e.target.value)}>
          <option value="">All</option>
          {speciesOptions.map(species => (
            <option key={species} value={species}>{species}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
