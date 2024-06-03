import React from 'react';
import { useCart } from './CartContext';
import '../Cart.css';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item card">
            <div className='row'>
                <div className='col-sm-4'>
                    <img className='cart-item-image' src={item.thumbnail} alt={item.name} />
                </div>
                <div className='col-sm-4  d-block'>        
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <h4><b>${item.price}</b></h4>
                </div>
                <div className="col-sm-2">
                    
                    <button className="btn btn-primary" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>&nbsp;{item.quantity}&nbsp;</span>
                    <button className="btn btn-primary" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
