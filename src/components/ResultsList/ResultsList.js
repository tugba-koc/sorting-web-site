import React from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./style.css";

function ResultsList({ currentResults }) {

  return (
    <div className="results-list">
      {currentResults.map((el, index) => (
        <div className="list-item result-item" key={index}>
        <ResultItem el={el} />
        </div>
      ))}
    </div>
  );
  // }
}

export default ResultsList;
