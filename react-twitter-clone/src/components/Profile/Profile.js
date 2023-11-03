import React, { useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('John Doe');  // example static data
    const [bio, setBio] = useState('Hello! This is my bio.');

    return (
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
            {/* Add edit functionalities */}
        </div>
    );
};

export default Profile;
