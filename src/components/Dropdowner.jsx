import React, { useRef, useState } from "react";

function Dropdowner(props) {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>{props.title}</button>
      {isOpen && (
        <ul ref={dropdownRef} className="dropdown-menu">
          {props.items.map((item) => (
            <li key={item._id}>{item.category}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdowner;
