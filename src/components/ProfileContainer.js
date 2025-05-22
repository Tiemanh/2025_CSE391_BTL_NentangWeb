import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileContainer = () => {
  const userData = {
    name: "Quang Minh và những người bạn",
    avatar: "/images/tqbt.jpg",
    bio: "Frontend Developer & React Enthusiast Specializing in React Hooks and Modern Web Development"
  };

  return (
    <div className="profile-container">
        <div className="profile-card-wrapper">
      <ProfileCard 
        name={userData.name}
        avatar={userData.avatar}
        bio={userData.bio}
      />
      </div>
    </div>
  );
};

export default ProfileContainer;
