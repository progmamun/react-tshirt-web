import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
  // Conditional Rendering Options
  // 1. Element Variable
  let command;
  if (cart.length === 0) {
    command = <p>Please Add at least one items</p>;
  } else if (cart.length === 1) {
    command = <p>Please add more...</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding item</small>
      </p>
    );
  }
  return (
    <div>
      <h2>Items Selected: {cart.length}</h2>
      {cart.map(tShirt => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {command}
    </div>
  );
};

export default Cart;
