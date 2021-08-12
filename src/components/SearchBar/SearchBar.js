import React from "react";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search">
      <form action="">
        <input
          className="search__input"
          type="search"
          name=""
          id=""
          placeholder="Search for a Country"
        />
        <input className="search__go btn" type="button" value="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
