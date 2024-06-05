//dashboard-app
import React from "react";
import Dashboard from "./componets/Dashboard";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import HomeNav from "./homenav";

function DashboardApp({ userName, mycount, setMycount }) {
  return (
    <>
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
        <Route path="/dashboard/Widgets" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default DashboardApp;
