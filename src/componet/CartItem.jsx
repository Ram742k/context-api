import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => decreaseQuantity(item.id)}>-</button>
      <button onClick={() => increaseQuantity(item.id)}>+</button>
    </div>
  );
};

export default CartItem;
