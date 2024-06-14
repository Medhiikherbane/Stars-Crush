import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch('https://miadil.github.io/starwars-api/api/all.json')
      .then((result) => result.json())
      .then((data) => {
        const profile = data.find((item) => item.name === name);
        setProfileData(profile);
      });
  }, [name]); // <--- Ensure the dependency array is correctly defined

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h1>{profileData.name}</h1>
      <img src={profileData.image} alt={profileData.name} className="profile-image" />
      <p><strong>Gender:</strong> {profileData.gender}</p>
      <p><strong>Birth Year:</strong> {profileData.birth_year}</p>
      <p><strong>Eye Color:</strong> {profileData.eye_color}</p>
      <p><strong>Height:</strong> {profileData.height}</p>
      <p><strong>Mass:</strong> {profileData.mass}</p>
      <p><strong>Homeworld:</strong> {profileData.homeworld}</p>
      <p><strong>Species:</strong> {profileData.species}</p>
    </div>
  );
};

export default Profile;
