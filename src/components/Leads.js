// src/components/Leads.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Leads = ({ leads }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/lead-source');
  };

  return (
    <div>
      <div className="button-container">
        <Link to="/create-lead">
          <button className="create-lead">Create Lead</button>
        </Link>
        <button className="create-lead" onClick={handleNavigate}>
          Lead Source
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.userId}>
              <td>{lead.userId}</td>
              <td>{lead.firstName}</td>
              <td>{lead.lastName}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
