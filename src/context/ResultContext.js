import { createContext, useContext } from "react";
import React from "react";

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const values = {};

  return (
    <ResultContext.Provider value={values}>{children}</ResultContext.Provider>
  );
};

export const useResult = () => useContext(ResultContext);
