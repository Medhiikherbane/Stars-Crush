// src/components/PlanetCard.js
import React from 'react';
import './PlanetCard.css';

const PlanetCard = ({ name, description, image }) => {
  return (
    <div className="planet-card">
      <img src={image} alt={`${name}`} className="planet-image" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PlanetCard;
