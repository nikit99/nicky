import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateLead = ({ onCreateLead }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLead = {
      userId: Date.now().toString(), // Generating a simple ID
      firstName,
      lastName,
      email,
      phone
    };
    onCreateLead(newLead);
    navigate('/leads'); // Redirect back to leads page after creation
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Create Lead</button>
      </form>
    </div>
  );
};

export default CreateLead;
