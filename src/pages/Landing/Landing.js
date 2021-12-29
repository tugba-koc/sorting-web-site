import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import LandingList from "../../components/LandingList/LandingList";
import "./style.css";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import ErrorText from "../../components/ErrorText/ErrorText";
import { useResult } from "../../utils/context";

function Landing() {
  const { filteredList, isActive } = useResult();
  return (
    <div className="landing d-flex justify-content-center flex-column align-items-center vh-100">
      <div className="col-2 mr">
        <Logo />
      </div>
      <p className="ms-5 mb-5 mt-1 short-p">Search web application</p>

      <div className="input-group d-flex justify-content-center">
        <div className="col-6 me-3 ">
          <SearchBar />
        </div>
        <Button />
      </div>
      <div className="col-6 mr">
        {isActive && filteredList.length ? (
          <LandingList />
        ) : !isActive ? (
          false
        ) : isActive && !filteredList.length ? (
          <ErrorText  />
        ) : null}
      </div>
    </div>
  );
}

export default Landing;
