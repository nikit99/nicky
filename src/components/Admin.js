import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = ({ users, onAddUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    const password = phone; // Password is the mobile number
    const newUser = { firstName, lastName, email, phone, password };
    onAddUser(newUser);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setShowForm(false); // Hide the form after adding the user
  };

  return (
    <div>
      
      <h2>Users</h2>
      <div className="button-container">
        <Link to="/create-user">
          <button>Add User</button>
        </Link>
      </div>
      {showForm && (
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
      )}
      
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
