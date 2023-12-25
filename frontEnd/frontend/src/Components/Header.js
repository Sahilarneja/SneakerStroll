// Header.js

import React from "react";
import { NavLink } from "react-router-dom";
const logoPath = process.env.PUBLIC_URL + "/images/logo2.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src={logoPath} alt="my logo img" />
        </NavLink>
      </div>
      <div class="search-bar">
        <input type="text" class="search-input" placeholder="Search..." />
        <button class="search-button">Search</button>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
