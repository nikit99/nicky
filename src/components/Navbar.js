import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAdmin }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leads">Leads</Link>
        </li>
        {isAdmin && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
