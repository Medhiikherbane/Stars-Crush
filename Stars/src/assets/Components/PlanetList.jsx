// src/components/PlanetList.js
import React from 'react';
import PlanetCard from './PlanetCard';

const planets = [
  {
    name: 'Tatooine',
    description: 'A desert planet and the birthplace of Anakin Skywalker.',
    image: '../Images/Tatoooinefull.webp'
  },
  {
    name: 'Hoth',
    description: 'An icy planet, known for the Battle of Hoth.',
    image: '../Images/planete_hoth.jpg'
  },
  {
    name: 'Endor',
    description: 'A forest moon inhabited by Ewoks.',
    image: '../Images/PlanetEndor.jpg'
  },
  {
    name: 'Naboo',
    description: 'A beautiful planet with lakes and forests, home to Padmé Amidala.',
    image: '../Images/Naboo.png'
  },
  {
    name: 'Coruscant',
    description: ' La planète entière est une immense ville.',
    image: '../Images/Coruscant.webp'
  }
];

function PlanetList () {
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
