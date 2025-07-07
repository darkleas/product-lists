import './Products.css';
import React, { useState, useEffect } from "react";
import Product from './components/Product';



function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://darkleas.github.io/product-lists/db.json")
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      })
  }, []);
  
  const toright = () => {
    const box = document.querySelector(".box");
    if (box) {
      box.scrollTo({
        left: box.scrollLeft + 800,
        behavior: "smooth"
      });    }
  };
  const toleft = () => {
    const box = document.querySelector(".box");
    if (box) {
      box.scrollTo({
        left: box.scrollLeft - 800,
        behavior: "smooth"
      });    }
  };
  
  return (
    <div className='products'>
      <p className='title'>Product List</p>
      <div className='box'> 
        {products.map(product => (
          <Product name={product.name} img={product.images} popularityScore={product.popularityScore} weight={product.weight} />
        ))}

      <svg onClick={toleft} className='arrows leftarrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      <svg onClick={toright} className='arrows rightarrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
      </div>
      
    </div>
    
  );
  
  
}

export default Products;
