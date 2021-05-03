import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, secondary, className, ...otherProps }) => (
  <button
    className={`custom-button ${secondary ? "secondary" : ""} ${className}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
