import React from "react";
import { Link } from "react-router-dom";
import NotesIcon from "./Icons/Notes-icon.svg";

function Sidebar() {
  return (
    <div className="sidebar-overall">
      <div className="sidebar-position">
        <div className="sidebar-brand d-flex align-items-center justify-content-start text-decoration-none">
          <div className="sidebar-brand-text mx-3">Notes App</div>
        </div>
        <ul className="sidebar" id="accordionSidebar">
          <li className="nav-item active">
            <div className="Notes-style">
              <div>
                <img src={NotesIcon} alt="icon" />
              </div>
              <div>
                <Link to="/Dashboard">
                  <span className="navitem-text1">Notes</span>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
