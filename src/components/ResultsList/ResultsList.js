import React from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./style.css";

function ResultsList({ currentResults }) {
  return (
    <div className="results-list">
      {currentResults.map((el, index) => (
        <ResultItem el={el} key={index} />
      ))}
    </div>
  );
  // }
}

export default ResultsList;
