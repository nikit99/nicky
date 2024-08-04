import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAdmin, onLogout }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leads">Leads</Link></li>
        {isAdmin && <li><Link to="/admin">Admin</Link></li>}
        <li><button onClick={onLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
