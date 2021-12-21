import React from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./style.css";
import { useNavigate } from "react-router-dom";

function LandingList({ filteredList }) { 
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/result");
  };

  return (
    <div className="landing-list">
      {filteredList.slice(0, 3).map((el, index) => (
        <div className="list-item" key={index}>
          <ResultItem el={el} />
        </div>
      ))}
      {filteredList.length >= 3 ? (
        <button onClick={handleClick} className="show-more mx-auto">
          Show more...
        </button>
      ) : null}
    </div>
  );
}

export default LandingList;
