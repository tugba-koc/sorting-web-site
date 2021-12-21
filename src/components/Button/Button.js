import React from "react";
import "./style.css";

function Button({ showResults }) {
  return (
    <div>
      <button onClick={showResults} className="button btn-block"> 
        Search
      </button>
    </div>
  );
}

export default Button;
