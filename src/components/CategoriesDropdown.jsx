import React, { useState, useEffect } from "react";
import Dropdowner from "./Dropdowner";
import "../categories.css";

function CategoriesDropdown() {
  // const categoriesList = [
  //   { id: 1, text: "Option 1" },
  //   { id: 2, text: "Option 2" },
  //   { id: 3, text: "Option 3" },
  // ];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
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
