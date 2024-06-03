import React from "react";

export default function Home({ mycount, setMycount }) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center card p-5 mx-5 flex-row gap-2 bg-info-subtle">
        <button
          className="btn btn-danger"
          onClick={() => {
            if (mycount > 0) {
              setMycount(mycount - 1);
            }
          }}
        >
          -
        </button>
        {mycount}
        <button
          className="btn btn-success"
          onClick={() => {
            setMycount(mycount + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
