// Onboarding.js
import { useState } from "react";
import vesterLogo from "/Vester_logo.svg";
import hamburger from "/Vector.svg";
import searchicon from "/trace.svg";

import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dash-content-div">
        <div className="dash-billboard">
          <nav className="dash-mobile-nav">
            <img
              src={vesterLogo}
              className="dash-vester-logo"
              alt="Vester logo"
            />
            <img src={hamburger} className="hamburger" alt="Navbar hamburger" />
          </nav>
          <div className="search-div">
              <img
                src={searchicon}
                className="search-icon"
                alt="Vester logo"
              />
            <input className="search-bar" type="text" placeholder="Search.." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
