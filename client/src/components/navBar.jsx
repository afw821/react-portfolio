import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar top-nav navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        Alex Watkins
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">
              PROJECTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              CONTACT
            </NavLink>
          </li>
          {props.user && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/project-manager">
                PROJECT MANAGER
              </NavLink>
            </li>
          )}
        </ul>
        <ul className="navbar-nav mr-4">
          {!props.user && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                LOGIN
              </NavLink>
            </li>
          )}
          {props.user && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
                LOGOUT
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
