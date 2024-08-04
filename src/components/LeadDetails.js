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
      <p><strong>User ID:</strong> {lead.userId}</p>
      <p><strong>First Name:</strong> {lead.firstName}</p>
      <p><strong>Last Name:</strong> {lead.lastName}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Phone:</strong> {lead.phone}</p>
      {/* Add more fields as needed */}
      <button onClick={handleEdit}>Edit</button> {/* Edit button */}
    </div>
  );
};

export default LeadDetails;
