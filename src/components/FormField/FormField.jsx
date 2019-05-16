import React from "react";

export default () => ({ children, title, placeholder }) => (
  <div className="site-form-field">
    <label className="site-form-field-title">{title}</label>
    <div className="site-form-input-container" />
  </div>
);
