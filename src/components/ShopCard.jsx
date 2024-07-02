import React from 'react';

function ShopCard({ product }) {
  return (
    <div className="shop-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.color}</p>
      <p>${product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ShopCard;
