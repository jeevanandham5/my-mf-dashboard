//dashboard
import React from "react";
import Dashboard from "./componets/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";
import HomeNav from "./homenav";

function App({ userName, mycount, setMycount }) {
  return (
    <>
      <Router>
        <div className="mb-4">
          <HomeNav
            userName={userName}
            mycount={mycount}
            setMycount={setMycount}
          />
        </div>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Home
                mycount={mycount}
                setMycount={setMycount}
                userName={userName}
              />
            }
          />
          <Route
            path="/myDashboard"
            element={
              <Dashboard
                mycount={mycount}
                setMycount={setMycount}
                userName={userName}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
