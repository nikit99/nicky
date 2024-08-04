// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/">ADMIN</Link>
        </li>
        <li>
          <Link to="/leads">LEADS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
