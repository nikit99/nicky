import React from 'react';
import { Link } from 'react-router-dom';
const Leads = ({ leads }) => {
  return (
    <div>
      <h1>Leads</h1>
      <Link to="/create-lead">
        <button>Create Lead</button>
      </Link>
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
