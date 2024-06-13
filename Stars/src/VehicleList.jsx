import React from 'react';
import VehicleCard from './VehicleCard';

const vehicleList = [
  {
    name: "X-Wing Starfighter",
    imgSrc: "./Images/Xwing-Starfighter.webp",
    type: "Chasseur stellaire",
    fuel: "Tibanna gaz",
    speed: 1050,
    color: "Blanc avec des marquages rouges",
  },
  {
    name: "TIE Fighter",
    imgSrc: "./Images/Tie Fighter.jpeg",
    type: "Chasseur stellaire",
    fuel: "Tibanna gaz",
    speed: 1200,
    color: "Gris foncé",
  },
  {
    name: "Millennium Falcon",
    imgSrc: "https://starwars-visualguide.com/assets/img/starships/10.jpg",
    type: "Vaisseau de contrebande / Cargo léger YT-1300",
    fuel: "Tibanna gaz et Hyper carburant",
    speed: 1050,
    color: "Blanc et gris",
  },
  {
    name: "AT-AT Walker",
    imgSrc: "https://starwars-visualguide.com/assets/img/vehicles/18.jpg",
    type: "Véhicule de transport terrestre et d'attaque",
    fuel: "Energie de réacteurs",
    speed: 60,
    color: "Gris",
  },
  {
    name: "Speeder Bike",
    imgSrc: "https://starwars-visualguide.com/assets/img/vehicles/30.jpg",
    type: "Moto terrestre rapide",
    fuel: "Energie électrique",
    speed: 500,
    color: "Gris ou marron",
  },
  // Ajoute d'autres véhicules ici
];

const VehicleList = () => {
  return (
    <div className="vehicle-list">
      {vehicleList.map((vehicle, index) => (
        <VehicleCard key={index} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;
