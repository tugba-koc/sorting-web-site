import React from "react";
import "./style.css";
import { useResult } from "../../utils/context";

function ErrorText() {
  const { text } = useResult();
  return (
    <div>
      <div className="error-text">"{text}" için sonuç bulunmamaktadır.</div>
    </div>
  );
}

export default ErrorText;
