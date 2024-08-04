import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LeadDetails = ({ leads }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const lead = leads.find((lead) => lead.userId === userId);

  if (!lead) {
    return <div>Lead not found</div>;
  }

  const handleEdit = () => {
    navigate(`/create-lead?edit=${userId}`);
  };

  return (
    <div>
      <h1>Lead Details</h1>
      <p><strong>Lead Owner:</strong> {lead.leadOwner}</p>
      <p><strong>Lead Name:</strong> {lead.leadName}</p>
      <p><strong>First Name:</strong> {lead.firstName}</p>
      <p><strong>Last Name:</strong> {lead.lastName}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Phone:</strong> {lead.phone}</p>
      <p><strong>Industry:</strong> {lead.industry}</p>
      <p><strong>Lead Source:</strong> {lead.leadSource}</p>
      <p><strong>Lead Status:</strong> {lead.leadStatus}</p>
      <p><strong>Created Time:</strong> {lead.createdTime}</p>
      <p><strong>Products Interested:</strong> {lead.productsInterested}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default LeadDetails;
