import React from "react";
import "./style.css";
import { useResult } from "../../utils/context";

function Button() {
  const { showResults } = useResult();
  return (
    <div>
      <button onClick={showResults} className="button btn-block">
        Search
      </button>
    </div>
  );
}

export default Button;
