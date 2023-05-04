import React, { useState, useEffect } from "react";
import Product from "../Product";
import HeroImage from "./HeroImage";
import CategoriesRoller from "./CategoriesRoller";

// import Login from "../Login";
// import Signup from "../Signup";
// import Carousel from "../Carousel";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Main() {
  // const products = {
  //   page: 1,
  //   limit: 10,
  //   total_pages: 4,
  //   total_items: 35,
  //   data: [
  //     {
  //       _id: "644e63e07aaa0b47ce90dc7e",
  //       brand: "Specialized",
  //       model: "Turbo Vado 5.0",
  //       type: "E-bike",
  //       frame_material: "Aluminum",
  //       wheel_size: "700c",
  //       price: 4499,
  //     },
  //     {
  //       _id: "644e63e07aaa0b47ce90dc7f",
  //       brand: "Santa Cruz",
  //       model: "Bronson Carbon R",
  //       type: "Mountain bike",
  //       frame_material: "Carbon",
  //       wheel_size: "27.5-inch",
  //       price: 4499,
  //     },
  //     {
  //       _id: "644e63e07aaa0b47ce90dc7a",
  //       brand: "Santa Cruz",
  //       model: "5010 Carbon S",
  //       type: "Mountain bike",
  //       frame_material: "Carbon",
  //       wheel_size: "27.5-inch",
  //       price: 5399,
  //     },
  //     {
  //       _id: "644e63e07aaa0b47ce90dc7d",
  //       brand: "Giant",
  //       model: "Defy Advanced 1",
  //       type: "Road bike",
  //       frame_material: "Carbon",
  //       wheel_size: "700c",
  //       price: 2399,
  //     },
  //     {
  //       _id: "644e63e07aaa0b47ce90dc7b",
  //       brand: "Trek",
  //       model: "Fuel EX 8",
  //       type: "Mountain bike",
  //       frame_material: "Carbon",
  //       wheel_size: "29-inch",
  //       price: 3399,
  //     },
  //     {
  //       _id: "644e63e07aaa0b47ce90dc79",
  //       brand: "Specialized",
  //       model: "S-Works Roubaix",
  //       type: "Road bike",
  //       frame_material: "Carbon",
  //       wheel_size: "700c",
  //       price: 11000,
  //     },
  //     {
  //       _id: "644e63e07aaa0b47ce90dc77",
  //       brand: "Cannondale",
  //       model: "Synapse Carbon Disc 105",
  //       type: "Road bike",
  //       frame_material: "Carbon",
  //       wheel_size: "700c",
  //       price: 2099,
  //     },
  //     {
  //       _id: "644e63e07aaa0b47ce90dc76",
  //       brand: "Trek",
  //       model: "Domane SLR 7",
  //       type: "Road bike",
  //       frame_material: "Carbon",
  //       wheel_size: "700c",
  //     },
  //     {
  //       _id: "644e63e07aaa0b47ce90dc78",
  //       brand: "Giant",
  //       model: "Reign SX",
  //       type: "Mountain bike",
  //       frame_material: "Aluminum",
  //       wheel_size: "27.5-inch",
  //       price: 3599,
  //     },
  //     {
  //       _id: "644e63e07aaa0b47ce90dc7c",
  //       brand: "Cannondale",
  //       model: "SuperSix EVO Carbon Disc 105",
  //       type: "Road bike",
  //       frame_material: "Carbon",
  //       wheel_size: "700c",
  //       price: 2899,
  //     },
  //   ],
  // }.data;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data); // check the structure of data
        setProducts(data.data); // assuming products is an array in the response
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="main-parent">
      <main>
        {/* <Login />
        <Signup /> */}
        <div className="categories-container">
          <CategoriesRoller />
        </div>
        <HeroImage />
        {
          <div
            className="product-list"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        }
      </main>
    </div>
  );
}

export default Main;
