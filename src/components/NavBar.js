import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">News-Journal</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/business"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/entertainment"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/general"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/health"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/science"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/sports"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/technology"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
