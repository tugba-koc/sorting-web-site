import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Results from "./pages/Results/Results";
import React from "react";
import { ResultProvider } from "./utils/context";

function App() {
  return (
    <div>
      <ResultProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/result" element={<Results />} />
          </Routes>
        </Router>
      </ResultProvider>
    </div>
  );
}

export default App;
