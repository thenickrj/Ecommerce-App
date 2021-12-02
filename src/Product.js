import React from "react";
import { store } from "react-notifications-component";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import "./notify-popup.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const notifyPopup = (title, message, type) => {
    store.addNotification({
      title: title,
      message: message,
      type: type,
      background: "pink",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  };

  const addToBasket = () => {
    // dispatch item into the data layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    notifyPopup("Added to Cart", title, "success");
    console.log(title);
  };

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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
