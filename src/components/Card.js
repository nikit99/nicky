import React from 'react';
//import './Card.css'; 

const Card = ({ icon, title, content }) => {
  return (
    <div className="card">
      <div className="card-icon">
        {icon}
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;