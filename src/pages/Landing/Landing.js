import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import LandingList from "../../components/LandingList/LandingList";
import "./style.css";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import ErrorText from "../../components/ErrorText/ErrorText";

function Landing({
  showResults,
  changeHandler,
  filteredList,
  text,
  isActive,
}) {
  return (
    <div className="landing d-flex justify-content-center flex-column align-items-center vh-100">
      <div className="col-2 mr"> 
        <Logo />
      </div>
      <p className="ms-5 mb-5 mt-1 short-p">Search web application</p>

      <div className="input-group d-flex justify-content-center"> 
        <div className="col-6 me-3 ">
          <SearchBar
            text={text}
            changeHandler={changeHandler}
            isActive={isActive}
            filteredList={filteredList}
          />
        </div>

        <Button showResults={showResults} />
      </div>
      <div className="col-6 mr">
        {isActive && filteredList.length ? (
          <LandingList
            filteredList={filteredList}
          />
        ) : !isActive ? (
          false
        ) : isActive && !filteredList.length ? (
          <ErrorText text={text} />
        ) : null}
      </div>
    </div>
  );
}

export default Landing;
