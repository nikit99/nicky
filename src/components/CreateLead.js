import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateLead = ({ onCreateLead, onUpdateLead, leads }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const [leadName, setLeadName] = useState('');
  const [industry, setIndustry] = useState('');
  const [leadSource, setLeadSource] = useState('');
  const [leadStatus, setLeadStatus] = useState('');
  const [createdTime, setCreatedTime] = useState('');
  const [productsInterested, setProductsInterested] = useState('');
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
        setLeadName(leadToEdit.leadName);
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
      firstName,
      lastName,
      email,
      phone,
      leadName,
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
          <label>
            Lead Owner:
            <input
              type="text"
              value={localStorage.getItem('currentUserEmail')}
              readOnly
            />
          </label>
        </div>
        <div>
          <label>
            Lead Name:
            <input
              type="text"
              value={leadName}
              onChange={(e) => setLeadName(e.target.value)}
              required
            />
          </label>
        </div>
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
        <div>
          <label>
            Industry:
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            >
              <option value="">Select Industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Transportation">Transportation</option>
              <option value="Energy">Energy</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Lead Source:
            <select
              value={leadSource}
              onChange={(e) => setLeadSource(e.target.value)}
              required
            >
              <option value="">Select Lead Source</option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Email Campaign">Email Campaign</option>
              <option value="Event">Event</option>
              <option value="Trade Show">Trade Show</option>
              <option value="Paid Advertising">Paid Advertising</option>
              <option value="Organic Search">Organic Search</option>
              <option value="Partner">Partner</option>
              <option value="Cold Call">Cold Call</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Lead Status:
            <select
              value={leadStatus}
              onChange={(e) => setLeadStatus(e.target.value)}
              required
            >
              <option value="">Select Lead Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Nurturing">Nurturing</option>
              <option value="Interested">Interested</option>
              <option value="Follow-Up">Follow-Up</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Closed - Won">Closed - Won</option>
              <option value="Closed - Lost">Closed - Lost</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Created Time:
            <input
              type="datetime-local"
              value={createdTime}
              onChange={(e) => setCreatedTime(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Products Interested:
            <input
              type="text"
              value={productsInterested}
              onChange={(e) => setProductsInterested(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">{userId ? 'Update Lead' : 'Create Lead'}</button>
      </form>
    </div>
  );
};

export default CreateLead;
