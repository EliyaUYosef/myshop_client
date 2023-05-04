import React, { useState } from "react";

function NavbarSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search with searchQuery
    console.log(`Searching for ${searchQuery}...`);
    setSearchQuery("");
  };

  return (
    <form
      className="navbar__search-form"
      style={{ marginLeft: "auto" }}
      onSubmit={handleSearchSubmit}
    >
      <input
        className="navbar__search-input"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className="navbar__search-button" type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default NavbarSearch;
