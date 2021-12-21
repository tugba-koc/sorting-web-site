import React from "react";
import "./style.css";

function ErrorText({ text }) {
  return (
    <div>
      <div className="error-text">"{text}" için sonuç bulunmamaktadır.</div>
    </div>
  );
}

export default ErrorText;
