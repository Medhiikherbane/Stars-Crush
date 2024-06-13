// src/components/PlanetList.js
import React from 'react';
import PlanetCard from './PlanetCard';

const planets = [
  {
    name: 'Tatooine',
    description: 'A desert planet and the birthplace of Anakin Skywalker.',
    image: 'https://starwars-visualguide.com/assets/img/planets/1.jpg'
  },
  {
    name: 'Hoth',
    description: 'An icy planet, known for the Battle of Hoth.',
    image: 'https://starwars-visualguide.com/assets/img/planets/4.jpg'
  },
  {
    name: 'Endor',
    description: 'A forest moon inhabited by Ewoks.',
    image: 'https://starwars-visualguide.com/assets/img/planets/7.jpg'
  },
  {
    name: 'Naboo',
    description: 'A beautiful planet with lakes and forests, home to Padmé Amidala.',
    image: 'https://starwars-visualguide.com/assets/img/planets/8.jpg'
  }
];

const PlanetList = () => {
  return (
    <div className="planet-list">
      {planets.map((planet, index) => (
        <PlanetCard
          key={index}
          name={planet.name}
          description={planet.description}
          image={planet.image}
        />
      ))}
    </div>
  );
};

export default PlanetList;
