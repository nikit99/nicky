import React from 'react';

const Home = ({ leadCount }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>Number of Leads: {leadCount}</p>
    </div>
  );
};

export default Home;