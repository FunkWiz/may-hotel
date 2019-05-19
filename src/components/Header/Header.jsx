import React from "react";
import "./Header.scss";
import { user } from "../../utils/icons";
import { Link } from 'react-router-dom';
import MenuBurger from "../MenuBurger/MenuBurger";
import { inject, observer } from "mobx-react";

const Header = ({ menu }) => {
  const toggleMenu = () => menu.active = !menu.active;

  return (
    <header className="site-header">
      <div className="site-header-content">
        <div className="site-header-user-icon">
          <img src={user} className="site-icon" />
        </div>
        <div className="site-header-logo">
          <Link to="/">Home</Link>
        </div>
        <MenuBurger onClick={toggleMenu} />
      </div>
    </header>
  )
};

export default inject("menu")(observer(Header));
