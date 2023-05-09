import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product";

const ProductsPage = () => {
  console.log("ProductPage");
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    const path = `http://localhost:3030/api/category/${categoryId}`;
    console.log(path);
    fetch(path)
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <main>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default ProductsPage;
