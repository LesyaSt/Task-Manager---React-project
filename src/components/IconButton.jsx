import React from "react";
import PropTypes from "prop-types";


function IconButton({ iconClass, ariaLabel }) {
  return (
    <button aria-label={ariaLabel}>
      <i className={iconClass + " icon-header"} aria-hidden="true"></i>
    </button>
  );
}


IconButton.propTypes = {
  iconClass: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default IconButton;