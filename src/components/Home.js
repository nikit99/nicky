// src/components/Home.js

import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Home = ({ leadCount, userCount }) => {
  return (
    <div>
    
      <div className="cards-container">
        <Card
          icon={<FontAwesomeIcon icon={faUser} />}
          title="Total Users"
          content={userCount}
        />
        <Card
          icon={<FontAwesomeIcon icon={faUsers} />}
          title="Lead Count"
          content={leadCount}
        />
      </div>
    </div>
  );
};

export default Home;