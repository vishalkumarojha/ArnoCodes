import React from "react";
import "../styles/navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar container">
          <div className="nav-left">
            <div className="nav-img">
              <NavLink to={"/"}>
                <img
                  src="https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Screenshot%202025-01-26%20141440.png?raw=true"
                  alt="logo"
                />
              </NavLink>
              <span>
                Arnocodes
                <br />
                <strong>A place to Grow</strong>
              </span>
            </div>
            {/* <div className="nav-search">
              <AiOutlineSearch />
              <input
                type="text"
                placeholder="Search Opportunities"
              />
            </div> */}
          </div>
          <div className="nav-right">
            <div className="nav-tabs">
              <div className="learn-tab">
                <NavLink to={"/courses"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">learn</span>
                </NavLink>
              </div>
              <div className="practice-tab">
                <NavLink to={"/practice"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">practice</span>
                </NavLink>
              </div>
              <div className="compete-tab">
                <NavLink to={"/compete"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">compete</span>
                </NavLink>
              </div>
              <div className="mentorship-tab">
                <NavLink to={"/mentor"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">Guidance</span>
                </NavLink>
              </div>
              <div className="jobs-tab">
                <NavLink to={"/job-portal"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">Opportunity</span>
                </NavLink>
              </div>
            </div>
            <div className="nav-btns">
              {/* <button className="btn host-btn">
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg"
                  alt="host btn"
                />
                <span>Host</span>
              </button> */}
              <button className="btn login-btn">
                <span>Login</span>
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg"
                  alt="host btn"
                />
              </button>
              {/* <button className="menu-btn">
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/hamburger_icon.svg"
                  alt="menu"
                />
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
