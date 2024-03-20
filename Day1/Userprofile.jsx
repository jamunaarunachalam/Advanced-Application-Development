import React, { useState } from 'react';
import './Userprofile.css';
import Nave from './Nave';

const Userprofile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Indhulega',
    email: 'indhu@gmail.com',
    mobileNumber: '9487423696',
    booking: '2' // Added booking field with default value '2'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    
    console.log('Updated user information:', userInfo);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-details">
        <h1>User Information</h1>
        {isEditing ? (
          <>
            <p>Name: <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} /></p>
            <p>Email: <input type="text" name="email" value={userInfo.email} onChange={handleInputChange} /></p>
            <p>Mobile Number: <input type="text" name="mobileNumber" value={userInfo.mobileNumber} onChange={handleInputChange} /></p>
            <p>Booking: <input type="text" name="booking" value={userInfo.booking} onChange={handleInputChange} /></p> {/* Input field for booking */}
            <button onClick={handleSaveClick}>Save</button>
          </>
        ) : (
          <>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Mobile Number: {userInfo.mobileNumber}</p>
            <p>Booking: {userInfo.booking}</p> {/* Display booking */}
            <button onClick={handleEditClick}>Edit</button>
          </>
        )}
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default Userprofile;
