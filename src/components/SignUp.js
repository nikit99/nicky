// src/components/SignUp.js
import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-up logic here
    onSignUp();
  };

  return (
    <div className="signup-container">
    <form onSubmit={handleSubmit}>
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default SignUp;
