import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const Layout = ({ children }) => (
  <>
    <Menu />
    <Header />
    <div className="site-layout">
      <main className="site-content">{children}</main>
    </div>
  </>
);

export default Layout;
