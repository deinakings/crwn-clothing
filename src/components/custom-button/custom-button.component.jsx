import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, secondary, ...otherProps }) => (
  <button
    className={`custom-button ${secondary ? "secondary" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
