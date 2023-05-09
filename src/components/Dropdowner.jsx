import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Dropdowner(props) {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  let collection = "category";
  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>{props.title}</button>
      {isOpen && (
        <ul ref={dropdownRef} className="dropdown-menu">
          {props.items.map((item) => (
            <li key={item._id}>
              <Link to={`/${collection}/${item._id}`}>{item[collection]}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdowner;
