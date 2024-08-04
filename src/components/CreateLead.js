import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateLead = ({ onCreateLead, onUpdateLead, leads }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const editId = queryParams.get('edit');

    if (editId) {
      const leadToEdit = leads.find((lead) => lead.userId === editId);
      if (leadToEdit) {
        setUserId(leadToEdit.userId);
        setFirstName(leadToEdit.firstName);
        setLastName(leadToEdit.lastName);
        setEmail(leadToEdit.email);
        setPhone(leadToEdit.phone);
      }
    }
  }, [location.search, leads]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLead = {
      userId: userId || Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      createdBy: localStorage.getItem('currentUserEmail')
    };

    if (userId) {
      // Update existing lead
      onUpdateLead(newLead);
    } else {
      // Create new lead
      onCreateLead(newLead);
    }

    navigate('/leads');
  };

  return (
    <div>
      <h1>{userId ? 'Edit Lead' : 'Create Lead'}</h1>
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
        <button type="submit">{userId ? 'Update Lead' : 'Create Lead'}</button>
      </form>
    </div>
  );
};

export default CreateLead;
