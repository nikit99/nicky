import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateLead = ({ onCreateLead, onUpdateLead, leads }) => {
  const [leadOwner, setLeadOwner] = useState('');
  const [leadName, setLeadName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [leadSource, setLeadSource] = useState('');
  const [leadStatus, setLeadStatus] = useState('');
  const [createdTime, setCreatedTime] = useState('');
  const [productsInterested, setProductsInterested] = useState('');
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
        setLeadOwner(leadToEdit.leadOwner);
        setLeadName(leadToEdit.leadName);
        setFirstName(leadToEdit.firstName);
        setLastName(leadToEdit.lastName);
        setEmail(leadToEdit.email);
        setPhone(leadToEdit.phone);
        setIndustry(leadToEdit.industry);
        setLeadSource(leadToEdit.leadSource);
        setLeadStatus(leadToEdit.leadStatus);
        setCreatedTime(leadToEdit.createdTime);
        setProductsInterested(leadToEdit.productsInterested);
      }
    }
  }, [location.search, leads]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLead = {
      userId: userId || Date.now().toString(),
      leadOwner,
      leadName,
      firstName,
      lastName,
      email,
      phone,
      industry,
      leadSource,
      leadStatus,
      createdTime,
      productsInterested,
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
          <label>Lead Owner:</label>
          <input
            type="text"
            value={leadOwner}
            onChange={(e) => setLeadOwner(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Lead Name:</label>
          <input
            type="text"
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Industry:</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          >
            <option value="">Select Industry</option>
            {/* Add other options here */}
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            {/* Add other industries as required */}
          </select>
        </div>
        <div>
          <label>Lead Source:</label>
          <select
            value={leadSource}
            onChange={(e) => setLeadSource(e.target.value)}
            required
          >
            <option value="">Select Lead Source</option>
            {/* Add other options here */}
            <option value="Website">Website</option>
            <option value="Referral">Referral</option>
            {/* Add other sources as required */}
          </select>
        </div>
        <div>
          <label>Lead Status:</label>
          <select
            value={leadStatus}
            onChange={(e) => setLeadStatus(e.target.value)}
            required
          >
            <option value="">Select Lead Status</option>
            {/* Add other options here */}
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            {/* Add other statuses as required */}
          </select>
        </div>
        <div>
          <label>Created Time:</label>
          <input
            type="datetime-local"
            value={createdTime}
            onChange={(e) => setCreatedTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Products Interested:</label>
          <input
            type="text"
            value={productsInterested}
            onChange={(e) => setProductsInterested(e.target.value)}
            required
          />
        </div>
        <button type="submit">{userId ? 'Update Lead' : 'Create Lead'}</button>
      </form>
    </div>
  );
};

export default CreateLead;
