import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/product.json')  
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
   <div className='row'>
      {products.map(product => (
        <div className='col-md-4 mt-3' key={product.id}>
          <div className='card'>
            <img src={product.thumbnail} alt={product.name} />
            <div className='card-body'>
              <h5 className='card-title'>{product.title}</h5>
              <p className='card-text'>{product.description}</p>
              <button className='btn btn-primary w-100' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
          
        </div>
        
      ))}
   </div>
  );
};

export default ProductList;

