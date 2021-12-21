import "./App.css";
import { ResultProvider } from "./context/ResultContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Results from "./pages/Results/Results";
import React from "react";
import axios from "axios";
import { listReducer, listInitialState } from "./reducer/listReducer";

function App() {
  const [list, listDispatch] = React.useReducer(listReducer, listInitialState);

  React.useEffect(() => {
    axios.get("Utils/data.json").then((res) => {
      listDispatch({ type: "FETCH_PROJECTS", payload: res.data.data });
    });
  }, []);

  const showResults = () => {
    if (list.text.trim().length) {
      listDispatch({ type: "SHOW_RESULTS" });
    } else {
      listDispatch({ type: "BLANK_RESULTS" });
    }
  };

  return (
    <div>
      <ResultProvider>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Landing
                  isActive={list.isActive}
                  list={list.list}
                  filteredList={list.filteredList}
                  text={list.text}
                  changeHandler={(event) =>
                    listDispatch({
                      type: "ON_CHANGE",
                      payload: event.target.value,
                    })
                  }
                  showResults={showResults}
                />
              }
            />
            <Route
              path="/result"
              element={
                <Results
                  isActive={list.isActive}
                  list={list.list}
                  filteredList={list.filteredList}
                  text={list.text}
                  listDispatch={listDispatch}
                  changeHandler={(event) =>
                    listDispatch({
                      type: "ON_CHANGE",
                      payload: event.target.value,
                    })
                  }
                  showResults={showResults}
                />
              }
            />
          </Routes>
        </Router>
      </ResultProvider>
    </div>
  );
}

export default App;
