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
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="landing offset-md-3 col-md-9 offset-1 col-11">
        <div className="offset-3 col-4 col-sm-3 col-md-2">
          <Logo />
        </div>

        <p className="offset-4 mb-5 mt-1 short-p">Search web application</p>

        <div className="input-group d-flex flex-row">
          <div className="col-9 col-md-8 me-md-3 me-1">
            <SearchBar />
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>

      <div className="col-md-6 col-10">
        {isActive && filteredList.length ? (
          <LandingList />
        ) : !isActive ? (
          false
        ) : isActive && !filteredList.length ? (
          <ErrorText />
        ) : null}
      </div>
    </div>
  );
}

export default Landing;
