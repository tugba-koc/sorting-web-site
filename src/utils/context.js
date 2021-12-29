import React, { createContext, useContext } from "react";
import axios from "axios";
import { listReducer, listInitialState } from "../store/reducer/listReducer";
import * as ACTION_TYPES from "../store/actions/action_type";

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [list, listDispatch] = React.useReducer(listReducer, listInitialState);

  React.useEffect(() => {
    axios.get("Utils/data.json").then((res) => {
      listDispatch({
        type: ACTION_TYPES.FETCH_PROJECTS,
        payload: res.data.data,
      });
    });
  }, []);

  const showResults = () => {
    if (list.text.trim().length) {
      listDispatch({ type: ACTION_TYPES.SHOW_RESULTS });
    } else {
      listDispatch({ type: ACTION_TYPES.BLANK_RESULTS });
    }
  };
  const changeHandler = (event) => {
    listDispatch({
      type: ACTION_TYPES.ON_CHANGE,
      payload: event.target.value,
    });
  };

  const values = {
    list,
    showResults,
    changeHandler,
    text: list.text,
    filteredList: list.filteredList,
    isActive: list.isActive,
    
  };

  return (
    <ResultContext.Provider value={values}>{children}</ResultContext.Provider>
  );
};

export const useResult = () => useContext(ResultContext);
