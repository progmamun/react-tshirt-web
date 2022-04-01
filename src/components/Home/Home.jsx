import React from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import useTShirts from '../../hooks/useTShirts';

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map(tShirt => (
          <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
