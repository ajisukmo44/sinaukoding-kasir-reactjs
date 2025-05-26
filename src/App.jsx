import React, { useState } from "react";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";
import Invoice from "./components/Invoice";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);

  const products = [
    { id: 1, name: "Dulux Catylac", price: 300000},
    { id: 2, name: "Mowilex Cendana", price: 150000 },
    { id: 3, name: "Jotun Extreme", price: 350000 },
    { id: 4, name: "Nodrop Avian", price: 250000 },
  ];

  const addToCart = (product) => {
    // console.log('prdct', product);
    let res_product = {
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
      ttl_price: product.price
    }
    let result = cart.filter((p, i) => p.id == product.id);
    // console.log('filter', result);
    if (result[0]) {
      // console.log('qty', result[0].qty);
      setCart((prev) => prev.filter((p, i) => p.id !== result[0].id));
      let update_data = {
        id: product.id,
        name: product.name,
        price: product.price,
        qty: parseInt(result[0]?.qty) + 1,
        ttl_price: (parseInt(result[0]?.qty) + 1)*product.price
      }
      setCart((prev) => [...prev, update_data]);
    } else {
      setCart((prev) => [...prev, res_product]);
    }
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePrintInvoice = () => {
    setShowInvoice(true);
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Kasir Toko Cat</h2>
      <div className="card">
        <ListProduct products={products} addToCart={addToCart} />
      </div>
      <div className="card">
      <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
      {cart.length !== 0 &&
        <p>
          <button onClick={handlePrintInvoice} disabled={cart.length === 0} className="btn-primary">
            Cetak Nota
          </button>
          {showInvoice && <Invoice cart={cart} />}
        </p>
      }
    </>
  )
}

export default App
