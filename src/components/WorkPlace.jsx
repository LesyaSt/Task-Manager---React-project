import React from "react";

import "../styles/work-place.scss";
import HeaderWorkplace from "./HeaderWorkplace";
import TodoList from "./TodoList";

function WorkPlace() {
  return (
    <div className="workplace-container">
      <HeaderWorkplace />

      <div className="buttons-options">
        <button className="btn">
          <i className="fa-solid fa-list-check"></i>
          To do List
        </button>
        <button className="btn">
          <i className="fa-regular fa-calendar"></i>
          Calendar
        </button>
        <button className="btn">
        <i className="fa-solid fa-border-all"></i>
          Board
        </button>
      </div>

      <TodoList />
    </div>
  );
}

export default WorkPlace;
