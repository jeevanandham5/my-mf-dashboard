//dashboard-app
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import DashboardApp from "./DashboardApp";

function App({ userName, mycount, setMycount, currentPath }) {
  return (
    <>
      <Router>
        <DashboardApp
          userName={userName}
          mycount={mycount}
          setMycount={setMycount}
          currentPath={currentPath}
        />
      </Router>
    </>
  );
}

export default App;
