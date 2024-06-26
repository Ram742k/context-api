import React, { useContext, useEffect } from "react";
import { myContext } from "../App";

const Cart = () => {
  const [data, setData] = useContext(myContext);

  // Calculate total price and total quantity
  const totalPrice = data.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = data.reduce((total, item) => total + item.quantity, 0);

  // Increment quantity handler
  const handleInc = (id, quantity) => {
    setData((curr) => {
      return curr.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            quantity: quantity + 1,
            thisprice: (element.quantity + 1) * element.price || (quantity + 1) * element.price,
          };
        }
        return element;
      });
    });
  };

  // Decrement quantity handler
  const handleDec = (id, quantity) => {
    setData((curr) => {
      return curr.map((element) => {
        if (element.id === id && quantity > 0) {
          return {
            ...element,
            quantity: quantity - 1,
            thisprice: (quantity - 1) * element.price,
          };
        }
        return element;
      });
    });
  };

  // Set initial quantity to 1 for each item
  useEffect(() => {
    setQuantity();
  }, []);

  const setQuantity = () => {
    setData((curr) => {
      return curr.map((ele) => {
        return { ...ele, quantity: 1 };
      });
    });
  };

  // Delete item handler
  const handleDelete = (id) => {
    setData(data.filter((e) => e.id !== id));
  };

  return (
    <div className="w-75 mx-auto mt-5">
      {data.map((element, index) => (
        <div className="contain px-4" key={index}>
          <div className="row py-4 px-1">
            <div className="col-sm-12 col-lg-8 d-flex flex-wrap">
              <img className="image" src={element.images} alt="Product" />
              <div className="ms-3 des">
                <h1 className="mb-3">{element.title}</h1>
                <p className="mb-1">{element.description}</p>
                <h5>{element.category}</h5>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 d-flex flex-wrap justify-content-between p-3 details">
              <div className="buttons">
                <button
                  className="btn btn-outline-primary fw-bold py-1"
                  onClick={() => handleDec(element.id, element.quantity)}
                >
                  -
                </button>
                <input
                  className="number mx-1 py-1 border-0"
                  type="text"
                  value={element.quantity !== undefined ? element.quantity : 1}
                  onChange={(e) => e.value}
                />
                <button
                  className="btn btn-outline-primary py-1 fw-bold"
                  onClick={() => handleInc(element.id, element.quantity)}
                >
                  +
                </button>
              </div>
              <div className="price">
                <h5 className="mb-5">${element.price}</h5>
                <button
                  onClick={() => handleDelete(element.id)}
                  className="btn btn-outline-danger py-1 mt-5"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          
        </div>
      ))}

      {/* Static summary section */}
      <div className="mt-4">
        <div className="row">
          <div className="col-6">
            <h5 className="text-secondary px-1 pb-3">SUBTOTAL:</h5>
          </div>
          <div className="col-6">
            <h5 className="text-end">${totalPrice.toFixed(2)}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h5 className="text-secondary px-1 pb-3">SHIPPING:</h5>
          </div>
          <div className="col-6">
            <h5 className="text-end">FREE</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <h5 className="text-dark px-1 pb-3">Total</h5>
          </div>
          <div className="col-6">
            <h5 className="text-end">${totalPrice.toFixed(2)}</h5>
          </div>
        </div>
        <div className="d-flex">
          <div className="ms-auto text-danger mb-5">Get Daily Cash With Nespola Card</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
