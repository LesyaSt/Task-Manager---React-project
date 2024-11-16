import React from "react";
import PropTypes from "prop-types";


function NavOptions({ iconClass, ariaLabel, children }) {
  return (
    <button className="nav-btn" aria-label={ariaLabel} >
      <i className={`${iconClass} icon-nav`} aria-hidden="true"></i>
      <span className="nav-text">{children}</span>
    </button>
  );
}


NavOptions.propTypes = {
  iconClass: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavOptions;