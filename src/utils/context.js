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

  // sorting functions

  // sorting name ascending (A-Z)

  const sortNameAsc = () => {
    let arrCopy = [...list.filteredList];
    arrCopy.sort();
    listDispatch({ type: ACTION_TYPES.SORT, payload: arrCopy });
  };

  // sorting name descending (Z-A)
  const sortNameDes = () => {
    let arrCopy = [...list.filteredList];
    arrCopy.sort().reverse();
    listDispatch({ type: ACTION_TYPES.SORT, payload: arrCopy });
  };

  // sorting date ascending (oldest first)
  const sortDateAsc = () => {
    let arrCopy = [...list.filteredList];

    arrCopy.forEach((it) => (it[3] = it[3].split("/").reverse().join("/")));

    arrCopy.sort((a, b) => (a[3] > b[3] ? 1 : -1));

    arrCopy.forEach((it) => (it[3] = it[3].split("/").reverse().join("/")));

    listDispatch({ type: ACTION_TYPES.SORT, payload: arrCopy });
  };

  // sorting date descending (newest first)
  const sortDateDes = () => {
    let arrCopy = [...list.filteredList];
    arrCopy.forEach((it) => (it[3] = it[3].split("/").reverse().join("/")));

    arrCopy.sort((a, b) => (a[3] < b[3] ? 1 : -1));

    arrCopy.forEach((it) => (it[3] = it[3].split("/").reverse().join("/")));

    listDispatch({ type: ACTION_TYPES.SORT, payload: arrCopy });
  };

  const values = {
    list,
    showResults,
    changeHandler,
    text: list.text,
    filteredList: list.filteredList,
    isActive: list.isActive,
    error: list.error,
    isLoading: list.isLoading,
    sortNameAsc,
    sortNameDes,
    sortDateAsc,
    sortDateDes,
  };

  return (
    <ResultContext.Provider value={values}>{children}</ResultContext.Provider>
  );
};

export const useResult = () => useContext(ResultContext);
