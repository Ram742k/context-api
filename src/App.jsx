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
        <header>
          <h1>Shopping Cart</h1>
        </header>
        <main>
          <div className='row'>
              <div className='col-md-8'>
                <ProductList />
              </div>
              <div className='col-md-4'>
                <Cart />
              </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
