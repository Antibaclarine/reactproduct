import React from 'react';
import'./index.css';
const Navigationbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/login">Register</a>
        </li>
        <li>
          <a href="/product">Our Products</a>
        </li>
        <li>
          <a href="/addproduct">Add products</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigationbar;