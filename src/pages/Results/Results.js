import React, { useState } from "react";
import ResultsList from "../../components/ResultsList/ResultsList";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./style.css";
import OrderBy from "../../components/OrderBy/OrderBy";
import Pagination from "../../components/Pagination/Pagination";
import ErrorText from "../../components/ErrorText/ErrorText";

function Result({
  showResults,
  changeHandler,
  list,
  filteredList,
  text,
  isActive,
  listDispatch,
}) {
  // pagination starts
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredList.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  const pageNumbers = [];

  React.useEffect(() => {
    isActive ? setCurrentPage(1) : setCurrentPage(currentPage);
  }, [isActive]);

  for (let i = 1; i <= Math.ceil(filteredList.length / resultsPerPage); ++i) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatePrev = () => {
    setCurrentPage(` ${currentPage - 1 < 1 ? 1 : currentPage - 1}`);
  };

  const paginateNext = () => {
    setCurrentPage(
      ` ${
        Number(currentPage) + 1 >= pageNumbers[pageNumbers.length - 1]
          ? pageNumbers[pageNumbers.length - 1]
          : Number(currentPage) + 1
      }`
    );
  };

  // pagination ends

  return (
    <div>
      <div className="results-wrapper d-flex align-items-center">
        <div className="d-flex justify-content-center ms-2 ms-md-5 col-2 col-lg-1">
          <Logo />
        </div>
        <div className="d-flex flex-row ms-2 ms-md-5 col-7">
          <div className="w-100">
            <SearchBar
              text={text}
              changeHandler={changeHandler} 
              isActive={isActive}
              filteredList={filteredList}
            />
          </div>

          <div className="ms-3">
            <Button showResults={showResults} />
          </div>
        </div>
      </div>

      <div className="d-flex d-inline">
        <div className="ms-2 ms-md-5 col-2 col-lg-1"></div>
        <div className="ms-2 ms-md-5 col-7">
          {isActive && filteredList.length >= 2 ? (
            <div className="d-flex justify-content-end">
              <OrderBy
                filteredList={filteredList}
                listDispatch={listDispatch}
              />
            </div>
          ) : null}
          <div>
            {isActive && filteredList.length ? (
              <ResultsList currentResults={currentResults} />
            ) : !isActive ? (
              false
            ) : isActive && !filteredList.length ? (
              <ErrorText text={text} />
            ) : null}
          </div>
          <div className="d-flex justify-content-center mt-5 mb-5">
            {isActive && filteredList.length > 3 ? (
              <Pagination
                currentPage={currentPage}
                paginatePrev={paginatePrev}
                paginateNext={paginateNext}
                paginate={paginate}
                pageNumbers={pageNumbers}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
