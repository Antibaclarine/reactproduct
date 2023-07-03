import React from 'react';
import'./navigation.css';
const Navigationbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/productdetails">ProductDetails</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigationbar;