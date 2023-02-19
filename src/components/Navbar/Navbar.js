import React from "react";
import "./Navbar.css";

const Navbar = () => {
  // state for nav toggle
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-info">
          <div className="nav-logo">
            <span>Estatery</span>
          </div>

          <div
            className={
              isNavExpanded
                ? "nav-links-container nav-links-container-mobile"
                : "nav-links-container"
            }
          >
            <ul className="nav-links">
              <li>Rent</li>
              <li>Buy</li>
              <li>Sell</li>
              <li>Manage property</li>
              <li>Resources</li>
            </ul>
          </div>
        </div>

        <div
          className={
            isNavExpanded ? "nav-links-container " : "nav-links-container"
          }
        >
          <li className="btn btn-light">Login</li>
          <li className="btn btn-primary">Sign Up</li>
        </div>

        <div className="nav-toggle">
          <button
            className="btn btn-toggle"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <p className={isNavExpanded ? "noneDisplay" : "blockDisplay"}>☰</p>

            <p className={isNavExpanded ? "blockDisplay" : "noneDisplay"}>X</p>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
