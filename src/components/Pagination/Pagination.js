import React from "react";
import "./style.css";

function Pagination({
  paginate,
  pageNumbers,
  paginatePrev,
  paginateNext,
  currentPage,
}) {
  return (
    <nav >
      <ul className="d-flex align-items-center">
        <li className="page-item">
          <a onClick={() => paginatePrev()} href="##" className="page-link">
            Previous
          </a>
        </li>
        {pageNumbers.length <= 6
          ? pageNumbers.map((num) => (
              <li key={num} className="page-item">
                <a
                  onClick={() => paginate(num)}
                  href="##"
                  className={`page-link ${
                    Number(currentPage) === Number(num) ? "active" : null
                  }`}
                >
                  {num}
                </a>
              </li>
            ))
          : null}
        {(Number(currentPage) <= 3 && pageNumbers.length > 6) ||
        Number(currentPage) >= 7
          ? pageNumbers.slice(0, 3).map((num) => (
              <li key={num} className="page-item">
                <a
                  onClick={() => paginate(num)}
                  href="##"
                  className={`page-link ${
                    Number(currentPage) === Number(num) ? "active" : null
                  }`}
                >
                  {num}
                </a>
              </li>
            ))
          : null}

        {pageNumbers.length > 6 &&
        Number(currentPage) <= pageNumbers.length &&
        Number(currentPage) > 3 ? (
          <li className="page-item">
            <a href="##" className="page-link-dotted">
              . . .
            </a>
          </li>
        ) : null}
        {Number(currentPage) > 3 && pageNumbers.length > 6
          ? pageNumbers
              .slice(Number(currentPage) - 3, Number(currentPage))
              .map((num) => (
                <li key={num} className="page-item">
                  <a
                    onClick={() => paginate(num)}
                    href="##"
                    className={`page-link ${
                      Number(currentPage) === Number(num) ? "active" : null
                    }`}
                  >
                    {num}
                  </a>
                </li>
              ))
          : null}
        {pageNumbers.length > 6 && Number(currentPage) < pageNumbers.length ? (
          <li className="page-item">
            <a href="##" className="page-link-dotted">
              . . .
            </a>
          </li>
        ) : null}
        {pageNumbers.length > 6 && Number(currentPage) <= pageNumbers.length - 4
          ? pageNumbers.slice(pageNumbers.length - 3).map((num) => (
              <li key={num} className="page-item">
                <a
                  onClick={() => paginate(num)}
                  href="##"
                  className={`page-link ${
                    Number(currentPage) === Number(num) ? "active" : null
                  }`}
                >
                  {num}
                </a>
              </li>
            ))
          : null}

        <li className="page-item">
          <a href="##" onClick={() => paginateNext()} className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
