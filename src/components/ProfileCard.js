import React from 'react';

const ProfileCard = ({ name, avatar, bio }) => {
  return (
    <div className="profile-card">
      {/* Thêm thẻ img để hiển thị avatar */}
      <img 
        src={avatar} 
        alt={name} 
        className="profile-avatar"
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = "https://via.placeholder.com/100"; // Fallback image
        }}
      />
      {/* Thêm class CSS cho tên và bio */}
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;