import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="site-layout">
      <main className="site-content">{children}</main>
    </div>
  </>
);

export default Layout;
