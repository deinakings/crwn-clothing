import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  secondary,
  inverted,
  className,
  ...otherProps
}) => (
  <button
    className={`custom-button ${secondary ? "secondary" : ""} ${
      inverted ? "inverted" : ""
    } ${className}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
