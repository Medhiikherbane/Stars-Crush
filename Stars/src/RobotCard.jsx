import React from 'react';
import PropTypes from 'prop-types';

const RobotCard = ({ robot }) => {
  return (
    <div className="robot-card">
      <img src={robot.imgSrc} alt={robot.name} />
      <h2>{robot.name}</h2>
      <p><strong>Type:</strong> {robot.type}</p>
      <p><strong>Fonction:</strong> {robot.function}</p>
      <p><strong>Planète d'origine:</strong> {robot.originPlanet}</p>
    </div>
  );
};

RobotCard.propTypes = {
  robot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    function: PropTypes.string.isRequired,
    originPlanet: PropTypes.string.isRequired,
  }).isRequired,
};

export default RobotCard;
