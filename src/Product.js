import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShekelSign,
  faShoppingCart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import test1 from "./assets/media/products/test/test.png";

function Product(props) {
  const { model, brand, frame_material, type, wheel_size, price } =
    props.product;
  let newPrice = 0;
  if (price > 10) {
    newPrice = price / 10;
  }
  return (
    <div className="product" style={{ paddingBottom: "28px", padding: 0 }}>
      <img src={test1} alt="My Image" style={{ width: "100%" }} />
      <span style={{ fontWeight: 700 }}>Name : {model}</span>
      <p>Brand : {brand}</p>
      <p>Frame Material : {frame_material}</p>
      <p>
        Price :{newPrice}
        <span> </span>
        <FontAwesomeIcon icon={faShekelSign} style={{ color: "#000000" }} />
      </p>
      <button style={{ marginRight: "15px", color: "#FFFFFF" }}>Show</button>
      <button>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#00EF00", fontSize: "110%" }}
        />
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ color: "#FFFFFF", fontSize: "110%" }}
        />
      </button>
    </div>
  );
}

export default Product;
