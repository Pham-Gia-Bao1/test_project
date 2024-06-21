import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./page.css";
const HeaderLayout = () => {
  return (
    <header className="header">
      <div className="nav-buttons"></div>
      <div className="filters">
        <button className="filter-button active">All</button>
        <button className="filter-button">Music</button>
        <button className="filter-button">Podcasts</button>
      </div>
      <div className="actions">
        <button className="action-button">
          <i className="fas fa-bell"></i>
        </button>
        <button className="action-button">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </header>
  );
};
export default HeaderLayout;
