import React from "react";
import "./style.css";
import { BiSort } from "react-icons/bi";
import { useResult } from "../../utils/context";

function OrderBy() {
  const { sortNameAsc, sortDateDes, sortNameDes, sortDateAsc } = useResult();

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
