import React from "react";

export default () => ({ children, onSubmit }) => (
  <form className="site-form" onSubmit={onSubmit}>
    {children}
  </form>
);
