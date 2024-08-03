// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Leads from './components/Leads';
import './styles.css'; // Import the CSS file

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [leads, setLeads] = useState([
    // Sample leads data
    { userId: '1', firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '1234567890' },
    { userId: '2', firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '0987654321' }
  ]);

  const handleSignUp = () => {
    setIsSignedUp(true);
    setIsSignedIn(true); // Automatically sign in after sign up
  };

  return (
    <Router>
      {isSignedIn && <Navbar />}
      <div className="container">
        <Routes>
          <Route 
            path="/" 
            element={isSignedIn ? <Home leadCount={leads.length} /> : <SignUp onSignUp={handleSignUp} />} 
          />
          <Route 
            path="/leads" 
            element={isSignedIn ? <Leads leads={leads} /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
