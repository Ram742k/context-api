import React from 'react';
import { CartProvider } from './componet/CartContext';
import ProductList from './componet/ProductList';
import Cart from './componet/Cart';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1 className='text-center mt-5'>Shopping Cart</h1>
        <main>
          <div className='row'>
            <div className='col-md-6 col-lg-8 '>
                <h5>Product</h5>
                <ProductList />
              </div>
              <div className='col-md-6 col-lg-4'>
                <h5>Shopping Cart</h5>
                <Cart />
              </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
