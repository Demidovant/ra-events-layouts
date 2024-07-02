import React from 'react';

function ShopItem({ product }) {
  return (
    <div className="shop-item">
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
      </div>
      <div>
        <p>{product.color}</p>
      </div>
      <div>
        <p>${product.price}</p>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ShopItem;
