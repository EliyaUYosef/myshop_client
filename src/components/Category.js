import React from "react";
import { Link } from "react-router-dom";

function Category(props) {
  return (
    <div className="category">
      {/* <img src={props.category.image} alt={props.category.name} /> */}
      <Link to={`/category/${props.category._id}`} className="category-link">
        {props.category.category}
      </Link>
      <span style={{ fontSize: "110%", fontWeight: "900", color: "#333333" }}>
        {" "}
        |{" "}
      </span>
    </div>
  );
}

export default Category;
