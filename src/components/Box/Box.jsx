import React from "react";
import "./Box.scss";

const Box = ({ children, className }) => (
  <div className={`site-box ${className}`}>{children}</div>
);

export default Box;
