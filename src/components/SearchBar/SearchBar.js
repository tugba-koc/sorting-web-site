import React from "react";
import "./style.css";

function SearchBar({ text, changeHandler, isActive, filteredList }) {
  return (
    <div>
      <input
        className={`search-bar ${
          isActive && !filteredList.length ? "error-border" : ""
        }`}
        type="search"
        name="text"
        value={text}
        onChange={changeHandler}
      />
    </div>
  );
}

export default SearchBar;
