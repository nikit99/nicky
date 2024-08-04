// src/components/Leads.js
import React, { useState } from 'react';

const Leads = ({ leads, onAddLead }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddLead = (e) => {
    e.preventDefault();
    const newLead = { firstName, lastName, email, phone, createdBy: localStorage.getItem('currentUserEmail') };
    onAddLead(newLead);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h1>Leads</h1>
      <form onSubmit={handleAddLead}>
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
        <button type="submit">Add Lead</button>
      </form>
      <h2>Leads List</h2>
      <ul>
        {leads.map((lead, index) => (
          <li key={index}>{`${lead.firstName} ${lead.lastName} - ${lead.email} - ${lead.phone}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leads;
