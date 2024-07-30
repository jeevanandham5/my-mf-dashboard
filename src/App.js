//dashboard-app
import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import DashboardApp from "./DashboardApp";

function App({ userName, mycount, setMycount, currentPath }) {
  return (
    <>
      <DashboardApp
        userName={userName}
        mycount={mycount}
        setMycount={setMycount}
        currentPath={currentPath}
      />
    </>
  );
}

export default App;
