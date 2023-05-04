import React from "react";
import Dropdowner from "./Dropdowner";
import CategoriesDropdown from "./CategoriesDropdown";
import NavbarSearch from "./NavbarSearch";

// import { Link } from "react-router-dom";
import png from "../assets/media/system/logo/logo.png";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img className="logo" src={png}></img>
          </li>
          <li>
            <div style={{ width: "50px" }}></div>
          </li>
          <li>
            <CategoriesDropdown />
          </li>
          <li>
            <a href="#">ProductsIndex</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
          <li>
            <a href="#">Contact-Us</a>
          </li>
        </ul>
        <NavbarSearch />
      </nav>
    </header>
  );
}

export default Header;
