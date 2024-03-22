import React from "react";
const Navbar = ({ setSearch }) => {
  return (
    <>
      <div className="nav mt-4">
        <button
          className="btn btn-outline-warning mx-3"
          onClick={() => setSearch("nature")}
        >
          Nature
        </button>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={() => setSearch("travel")}
        >
          Travel
        </button>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={() => setSearch("nature")}
        >
          City
        </button>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={() => setSearch("car")}
        >
          Car
        </button>
        <button
          className="btn btn-outline-warning mx-3"
          onClick={() => setSearch("faishion")}
        >
          Fashion
        </button>
        <button
          className="btn btn-outline-light mx-3"
          onClick={() => setSearch("animals")}
        >
          Animals
        </button>
        <button
          className="btn btn-outline-dark text-light mx-3"
          onClick={() => setSearch("technology")}
        >
          Technology
        </button>
        <button
          className="btn btn-outline-warning mx-3"
          onClick={() => setSearch("finance")}
        >
          Business & Finance
        </button>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={() => setSearch("tokyo")}
        >
          Tokyo{" "}
        </button>
        <button
          className="btn btn-outline-info mx-3"
          onClick={() => setSearch("dubai")}
        >
          Dubai
        </button>
        <button className="btn btn btn-warning mx-3">Saved</button>
      </div>
      <div
        className="container my-4"
        style={{
          width: "780px",
        }}
      >
        <div className="mb-3">
          <input
            type="email"
            className="form-control bg-dark text-light"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
