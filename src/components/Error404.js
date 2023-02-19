import React from "react";
import { Link } from "react-router-dom";
import errorNotFound from "../assets/pageNotFound.jpg";

const Error404 = () => {
  return (
    <>
      <div
        style={{ height: "80vh", backgroundColor: "#fff" }}
        className="App-header"
      >
        <h1>Are you Lost?</h1>
        <img src={errorNotFound} alt="error not found" />
        <Link to="/">Go To Home page</Link>
      </div>
    </>
  );
};

export default Error404;
