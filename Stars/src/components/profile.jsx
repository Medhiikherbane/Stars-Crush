import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './profile.css';

const Profile = () => {
  const { name } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [likeCounts, setLikeCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://miadil.github.io/starwars-api/api/all.json')
      .then((result) => result.json())
      .then((data) => {
        const profile = data.find((item) => item.name === name);
        setProfileData(profile);
      });
  }, [name]);

  useEffect(() => {
    // Initialize likeCounts from localStorage
    const likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || {};
    setLikeCounts(likeCounts);
  }, []);

  const handleLikeClick = (name) => {
    const likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || {};
    likeCounts[name] = (likeCounts[name] || 0) + 1;
    localStorage.setItem('likeCounts', JSON.stringify(likeCounts));
    setLikeCounts(likeCounts);
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <div className="profile-header">
        <img src={profileData.image} alt={profileData.name} className="profile-image" />
        <div className="profile-details">
          <h1>{profileData.name}</h1>
          <p><strong>Gender:</strong> {profileData.gender}</p>
          <p><strong>Birth Year:</strong> {profileData.birth_year}</p>
          <p><strong>Eye Color:</strong> {profileData.eye_color}</p>
          <p><strong>Height:</strong> {profileData.height}</p>
          <p><strong>Mass:</strong> {profileData.mass}</p>
          <p><strong>Homeworld:</strong> {profileData.homeworld}</p>
          <p><strong>Species:</strong> {profileData.species}</p>
        </div>
      </div>
      <div className="profile-buttons">
        <button className="message-button">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <button className="like-button" onClick={() => handleLikeClick(profileData.name)}>
          <FontAwesomeIcon icon={faHeart} /> {likeCounts[profileData.name] || 0}
        </button>
      </div>
    </div>
  );
};

export default Profile;
