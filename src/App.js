// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Leads from './components/Leads';
import Admin from './components/Admin';
import './styles.css';

const adminCredentials = {
  email: "nikit@gmail.com",
  password: "nikit@123"
};

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedLeads = JSON.parse(localStorage.getItem('leads')) || [];
    setUsers(storedUsers);
    setLeads(storedLeads);
  }, []);

  const handleLogin = (email, password) => {
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setIsAdmin(true);
      setIsSignedIn(true);
      setCurrentUser({ email });
      localStorage.setItem('currentUserEmail', email);
    } else {
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        setIsSignedIn(true);
        setCurrentUser(user);
        localStorage.setItem('currentUserEmail', email);
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const handleAddUser = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  const handleAddLead = (lead) => {
    const newLeads = [...leads, lead];
    setLeads(newLeads);
    localStorage.setItem('leads', JSON.stringify(newLeads));
  };

  const userLeads = leads.filter(lead => lead.createdBy === currentUser?.email);

  return (
    <Router>
      {isSignedIn && <Navbar isAdmin={isAdmin} />}
      <div className="container">
        <Routes>
          <Route path="/" element={
            isSignedIn ? (
              <Home leadCount={userLeads.length} />
            ) : (
              <SignIn onLogin={handleLogin} />
            )
          } />
          <Route path="/leads" element={isSignedIn ? <Leads leads={userLeads} onAddLead={handleAddLead} /> : <Navigate to="/" />} />
          <Route path="/admin" element={isAdmin ? <Admin users={users} onAddUser={handleAddUser} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
