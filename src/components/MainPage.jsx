import React from "react";

import IconButton from "./IconButton";

import "../styles/main-page.scss";
import Navigation from './Navigation';
import WorkPlace from './WorkPlace';

function MainPage() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <i className="fa-solid fa-lemon"></i>
          <h1><span>Lemon</span> Work Management</h1>
        </div>

        <div className="header-tools">
          <IconButton iconClass="fa-regular fa-bell" ariaLabel="Notifications" />
          <IconButton iconClass="fa-solid fa-user-plus" ariaLabel="Add User" />
          <IconButton iconClass="fa-solid fa-magnifying-glass" ariaLabel="Search" />
          <IconButton iconClass="fa-solid fa-question" ariaLabel="Help" />
          <IconButton iconClass="fa-solid fa-circle-user" ariaLabel="User Profile" />
        </div>
      </header>
      <div className="work-place">
         <Navigation />
         <WorkPlace />
      </div>
    </div>
  );
}

export default MainPage;
