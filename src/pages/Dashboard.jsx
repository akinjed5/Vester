// Onboarding.js
import { useState } from "react";
import vesterLogo from "/Vester_logo.svg";
import hamburger from "/Vector.svg";
import illustration1 from "/illustration.svg";
import ngflag from "/ngflag.svg";
import flare from "/flare.svg";
import wise from "/wise.svg";
import swagapp from "/swagapp.svg";

import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dash-billboard">
        <nav className="dash-mobile-nav">
          <img
            src={vesterLogo}
            className="dash-vester-logo"
            alt="Vester logo"
          />
          <img src={hamburger} className="hamburger" alt="Navbar hamburger" />
        </nav>
      </div>
      <div className="dash-content-div">
        <input className="search-bar" type="text" placeholder="Search.." />
        <div className="banner">
          <div className="dash-text-grp">
            <h2>Jedi AI</h2>
            <a>Jediai.com.ng</a>
          </div>
          <img
            src={illustration1}
            className="dash-vester-logo"
            alt="Vester logo"
          />
        </div>
        <div className="info-grp">
          <div className="info-tile">
            Industry : <span className="orange-text"> Fintech</span>
          </div>
          <div className="info-tile">
            <img src={ngflag} className="" alt="Vester logo" />
            Nigeria
          </div>
          <div className="info-tile">
            Founded : <span className="orange-text">2002</span>
          </div>
        </div>
        <div className="info-div">
          <h2>List of similar companies</h2>
          <div className="slider">
            <div className="info-grp1">
              <div className="info-card">
                <img src={flare} className="" alt="Vester logo" />
                <h2>Flare</h2>
                <p>Flare unifies monitoring of thousands of cybercrime</p>
              </div>
              <div className="info-card">
                <img src={wise} className="" alt="Vester logo" />

                <h2>Wise</h2>
                <p>
                  Send money globally for less · Manage your money worldwide
                </p>
              </div>
              <div className="info-card">
                <img src={swagapp} className="" alt="Vester logo" />
                <h2>Swagapp</h2>
                <p>The all-in-one employment superapp for easi</p>
              </div>
              <div className="info-card">
                <img src={flare} className="" alt="Vester logo" />
                <h2>Flare</h2>
                <p>Flare unifies monitoring of thousands of cybercrime</p>
              </div>
              <div className="info-card">
                <img src={wise} className="" alt="Vester logo" />

                <h2>Wise</h2>
                <p>
                  Send money globally for less · Manage your money worldwide
                </p>
              </div>
              <div className="info-card">
                <img src={swagapp} className="" alt="Vester logo" />
                <h2>Swagapp</h2>
                <p>The all-in-one employment superapp for easi</p>
              </div>
            </div>
            <div className="info-grp1">
              <div className="info-card">
                <img src={flare} className="" alt="Vester logo" />
                <h2>Flare</h2>
                <p>Flare unifies monitoring of thousands of cybercrime</p>
              </div>
              <div className="info-card">
                <img src={wise} className="" alt="Vester logo" />

                <h2>Wise</h2>
                <p>
                  Send money globally for less · Manage your money worldwide
                </p>
              </div>
              <div className="info-card">
                <img src={swagapp} className="" alt="Vester logo" />
                <h2>Swagapp</h2>
                <p>The all-in-one employment superapp for easi</p>
              </div>
              <div className="info-card">
                <img src={flare} className="" alt="Vester logo" />
                <h2>Flare</h2>
                <p>Flare unifies monitoring of thousands of cybercrime</p>
              </div>
              <div className="info-card">
                <img src={wise} className="" alt="Vester logo" />

                <h2>Wise</h2>
                <p>
                  Send money globally for less · Manage your money worldwide
                </p>
              </div>
              <div className="info-card">
                <img src={swagapp} className="" alt="Vester logo" />
                <h2>Swagapp</h2>
                <p>The all-in-one employment superapp for easi</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="form-text">Follow up questions</h2>
        <div className="form-div1">
          <form className="form-questions">
            <h2>
              How would you rate your overall experience with the onboarding
              process?
            </h2>
            <label>
              <input type="radio" />
              Satisfied
            </label>
            <label>
              <input type="radio" />
              Very Satisfied
            </label>
            <label>
              <input type="radio" />
              Not Satisfied
            </label>
            <label>
              <input type="radio" />
              Neutral
            </label>
            <button className="dashboard-submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
