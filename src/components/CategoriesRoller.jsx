import React, { useState, useEffect } from "react";
import Category from "./Category";
import "../styles/categories.css";

function CategoriesRoller() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/api/categories`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.categories); // check the structure of data
        setCategories(data.categories); // assuming categories is an array in the response
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="categories-roller">
      {categories.map((category) => (
        <Category key={category._id} category={category} />
      ))}
    </div>
  );
}

export default CategoriesRoller;
