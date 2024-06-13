import React from 'react';
import RobotCard from './RobotCard';

const robotList = [
  {
    name: "R2-D2",
    imgSrc: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
    type: "Astromech Droid",
    function: "Navigateur et Réparateur",
    originPlanet: "Naboo",
  },
  {
    name: "C-3PO",
    imgSrc: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
    type: "Protocol Droid",
    function: "Traducteur",
    originPlanet: "Tatooine",
  },
  {
    name: "BB-8",
    imgSrc: "https://starwars-visualguide.com/assets/img/characters/87.jpg",
    type: "Astromech Droid",
    function: "Navigateur et Réparateur",
    originPlanet: "Jakku",
  },
  {
    name: "K-2SO",
    imgSrc: "./Images/K-2SO.webp",
    type: "Security Droid",
    function: "Sécurité et Espionnage",
    originPlanet: "Inconnu",
  },
  {
    name: "IG-88",
    imgSrc: "https://starwars-visualguide.com/assets/img/characters/58.jpg",
    type: "Assassin Droid",
    function: "Chasseur de primes",
    originPlanet: "Inconnu",
  },
  // Ajoute d'autres robots ici
];

const RobotList = () => {
  return (
    <div className="robot-list">
      {robotList.map((robot, index) => (
        <RobotCard key={index} robot={robot} />
      ))}
    </div>
  );
};

export default RobotList;
