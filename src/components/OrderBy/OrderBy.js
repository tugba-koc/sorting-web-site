import React from "react";
import "./style.css";
import { BiSort } from "react-icons/bi";
import { useResult } from "../../utils/context";
import * as ACTION_TYPES from "../../store/actions/action_type";

function OrderBy() {
  const { filteredList, listDispatch } = useResult();
  // sorting functions

  // sorting name ascending (A-Z)
  const sortNameAsc = () => {
    let arrCopy = [...filteredList];
    arrCopy.sort();
    listDispatch({ type: ACTION_TYPES.SORT, payload: arrCopy });
  };

  // sorting name descending (Z-A)
  const sortNameDes = () => {
    let arrCopy = [...filteredList];
    arrCopy.sort().reverse();
    listDispatch({ type: ACTION_TYPES.SORT, payload: arrCopy });
  };

  // sorting date ascending (oldest first)
  const sortDateAsc = () => {
    let arrCopy = [...filteredList];

    arrCopy.forEach((it) => (it[3] = it[3].split("/").reverse().join("/")));

    arrCopy.sort((a, b) => (a[3] > b[3] ? 1 : -1));

    arrCopy.forEach((it) => (it[3] = it[3].split("/").reverse().join("/")));

    listDispatch({ type: ACTION_TYPES.SORT, payload: arrCopy });
  };

  // sorting date descending (newest first)
  const sortDateDes = () => {
    let arrCopy = [...filteredList];
    arrCopy.forEach((it) => (it[3] = it[3].split("/").reverse().join("/")));

    arrCopy.sort((a, b) => (a[3] < b[3] ? 1 : -1));

    arrCopy.forEach((it) => (it[3] = it[3].split("/").reverse().join("/")));

    listDispatch({ type: ACTION_TYPES.SORT, payload: arrCopy });
  };

  return (
    <div>
      <div
        className="order-by-icon"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="icon">
          <BiSort />{" "}
        </div>

        <p className="order-by-p">Order by</p>
      </div>
      <ul className="dropdown-menu ms-5" aria-labelledby="dropdownMenuButton1">
        <li>
          <p onClick={sortNameAsc} className="dropdown-item ">
            Name ascending
          </p>
        </li>
        <li>
          <p onClick={sortNameDes} className="dropdown-item " href="/">
            Name descending
          </p>
        </li>
        <li>
          <p onClick={sortDateAsc} className="dropdown-item" href="/">
            Year ascending
          </p>
        </li>
        <li>
          <p onClick={sortDateDes} className="dropdown-item" href="/">
            Year descending
          </p>
        </li>
      </ul>
    </div>
  );
}

export default OrderBy;
