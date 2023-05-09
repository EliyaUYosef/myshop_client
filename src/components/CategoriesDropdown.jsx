import React, { useState, useEffect } from "react";
import Dropdowner from "./Dropdowner";
import "../styles/categories.css";

function CategoriesDropdown() {
  // const categories = [
  //   { _id: 1, category: "Option 1" },
  //   { _id: 2, category: "Option 2" },
  //   { _id: 3, category: "Option 3" },
  // ];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/categories")
      .then((response) => response.json())
      .then((data) => {
        // console.log("- - - - - - - - - - - - - - - -", data.categories); // check the structure of data
        setCategories(data.categories); // assuming categories is an array in the response
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="categories-roller">
      <Dropdowner title="Categories" items={categories} />
    </div>
  );
}

export default CategoriesDropdown;
