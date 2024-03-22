import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="nav mt-4">
        <button className="btn btn-outline-warning mx-3">Nature</button>
        <button className="btn btn-outline-primary mx-3">Travel</button>
        <button className="btn btn-outline-primary mx-3">City</button>
        <button className="btn btn-outline-primary mx-3">Car</button>
        <button className="btn btn-outline-warning mx-3">Fashion</button>
        <button className="btn btn-outline-light mx-3">Animals</button>
        <button className="btn btn-outline-dark text-light mx-3">
          Technology
        </button>
        <button className="btn btn-outline-warning mx-3">
          Business & Finance
        </button>
        <button className="btn btn-outline-primary mx-3">Tokyo </button>
        <button className="btn btn-outline-info mx-3">Dubai</button>
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
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
