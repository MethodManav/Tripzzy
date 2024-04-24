import React from "react";
import "../assets/adminstyle.css";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/">
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" to={"/admin/feedback"}>
              <i className="fas fa-comment"></i>
              <span>Feedback Message</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/add_admin">
              <i className="fas fa-user-cog"></i>
              <span>Add Admin</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/add_flights">
              <i className="fas fa-plane-departure"></i>
              <span>Add Flights</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/add_hotels">
              <i className="fas fa-hotel"></i>
              <span>Add Hotels</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default AdminSidebar;
