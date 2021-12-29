import React from "react";
import "./style.css";
import { useResult } from "../../utils/context";

function SearchBar() {
  const { text, changeHandler, isActive, filteredList } = useResult();
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
