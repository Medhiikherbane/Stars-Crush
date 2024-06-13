import React from 'react';
import PropTypes from 'prop-types';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <img src={vehicle.imgSrc} alt={vehicle.name} />
      <h2>{vehicle.name}</h2>
      <p><strong>Type:</strong> {vehicle.type}</p>
      <p><strong>Carburant:</strong> {vehicle.fuel}</p>
      <p><strong>Vitesse:</strong> {vehicle.speed} km/h</p>
      <p><strong>Couleur:</strong> {vehicle.color}</p>
    </div>
  );
};

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default VehicleCard;
