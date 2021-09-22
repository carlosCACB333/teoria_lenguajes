import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <aside
      className="navbar navbar-vertical border-0 border-radius-xl  
      position-fixed  scroll animate__animated animate__fadeInLeft
      bg-dark top-0 bottom-0"
      id="sideBar"
      style={{ maxHeight: "100vh" }}
    >
      <div className="my-3 ms-1 logo">
        <i className="fa fa-hand-holding-usd" style={{ fontSize: "2rem" }}></i>

        <span className="ms-1 fw-bold">Teoria de lenguajes</span>
      </div>
      <hr className="divider mt-0" />
      <div className="w-auto">
        <ul className="navbar-nav ps-3">
          <li className="nav-item mt-3">
            <small
              className="nav-link-text ms-2 text-uppercase fw-bold opacity-50"
              style={{ fontSize: ".75em" }}
            >
              Traductores
            </small>
          </li>
          <li className="nav-item m-1">
            <NavLink
              className="nav-link rounded-3"
              to={`/x`}
              activeClassName="active"
            >
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3 ">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Dashboard</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink
              className="nav-link rounded-3"
              to={`/sintaxis`}
              activeClassName="active"
            >
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3 ">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Análisis sintáctico</span>
              </div>
            </NavLink>
          </li>

          <li className="nav-item mt-3">
            <span
              className="nav-link-text ms-2 text-uppercase fw-bold opacity-50"
              style={{ fontSize: ".75em" }}
            >
              Otros
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
