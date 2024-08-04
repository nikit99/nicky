import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = ({ onAddUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('standard'); // default role set to standard
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = phone; // Password is the mobile number
    const newUser = { firstName, lastName, email, phone, password, role };
    onAddUser(newUser);
    navigate('/admin'); // Redirect back to admin page after creation
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <div>
            <input
              type="radio"
              id="admin"
              name="role"
              value="admin"
              checked={role === 'admin'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <div>
            <input
              type="radio"
              id="standard"
              name="role"
              value="standard"
              checked={role === 'standard'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="standard">Standard</label>
          </div>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
