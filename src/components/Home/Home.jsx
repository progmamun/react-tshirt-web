import React from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
  return (
    <div className="home-container">
      <div className="tshirt-container"></div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
