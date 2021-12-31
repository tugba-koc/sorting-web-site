import React from "react";
import "./style.css";

function ResultItem({ el, key }) {
  return (
    <div class="list-item">
    <div className="item-border">
      <div className="list-left">
        <div className="country-name">{el[4]}</div>
        <div className="name-surname">{el[0]}</div>
      </div>
      <div className="list-right d-none d-md-block">
        <div className="e-mail">{el[2]}</div>
      </div>
    </div>
    </div>
  );
}

export default ResultItem;
