import React from "react";
import Styles from "./App.module.css";
import { Link, useLocation } from "react-router-dom";

export default function HomeNav({ userName, mycount, setMycount }) {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };
  return (
    <div className={Styles.main}>
      <div className={Styles.box}>
        <h1 className="m-0">Welcome to the dashboard!</h1>
        <p className="m-0">{userName || "no username"}</p>
        <div className="d-flex align-items-center justify-content-center gap-5">
          <div>
            <div className="btn-group">
              <a
                href="/"
                className={`btn btn-primary ${
                  isActive("/") ? "active bg-info" : ""
                }`}
              >
                home
              </a>
              <Link
                to={"/dashboard"}
                className={`btn btn-primary ${
                  isActive("/dashboard") ? "active bg-info" : ""
                }`}
              >
                Dashboard
              </Link>
              <Link
                to={"/myDashboard"}
                className={`btn btn-primary ${
                  isActive("/myDashboard") ? "active bg-info" : ""
                }`}
              >
                Widgets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
