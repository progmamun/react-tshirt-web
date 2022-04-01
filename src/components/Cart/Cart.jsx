import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
  // Conditional Rendering Options
  // 1. Element Variable
  // 2. Ternary operator condition ? true : false;
  // 3. && Operator (shorthand)
  // 4. || or operator
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
      {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
      {cart.length === 3 && (
        <div className="orange">
          <h3>added three items</h3>
        </div>
      )}
      {cart.length === 0 || <p className="orange">YAY! Your are buying...</p>}
    </div>
  );
};

export default Cart;
