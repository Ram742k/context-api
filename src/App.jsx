import React, { createContext, useState } from 'react';
import Cart from './componet/Cart';
import './Cart.css';



export const myContext = createContext('');
const App = () => {
  const products =[
    {
      "products": [
          {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://preview.free3d.com/img/2017/12/2140162101740570270/1cmeogfs.jpg"
            ]
          },
          
      ]
  }
  ]

  const [data,setData] = useState(products[0].products);

  console.log(data)
  return (
    <div>
      <myContext.Provider value={[data,setData]}>
        <Cart/>
      </myContext.Provider>
      
    </div>
  );
};

export default App;