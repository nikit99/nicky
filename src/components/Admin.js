// src/components/Admin.js
import React, { useState } from 'react';

const Admin = ({ users, onAddUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddUser = (e) => {
    e.preventDefault();
    const password = phone; // Password is the mobile number
    const newUser = { firstName, lastName, email, phone, password };
    onAddUser(newUser);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h1>Admin</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{`${user.firstName} ${user.lastName} - ${user.email}`}</li>
        ))}
      </ul>
      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
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
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Admin;
