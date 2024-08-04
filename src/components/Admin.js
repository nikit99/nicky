import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = ({ users, onAddUser }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h2>Users</h2>
      <div className="button-container">
        <Link to="/create-user">
          <button>Add User</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th> {/* Added Role Column */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td> {/* Display User Role */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
