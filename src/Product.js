import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          {/* <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p> */}
        </div>
      </div>
      <img
        // src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        src={image}
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
