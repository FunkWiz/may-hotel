import React, { useContext } from "react";
import "./Header.scss";
import { user } from "../../utils/icons";
import { Link } from "react-router-dom";
import MenuBurger from "../MenuBurger/MenuBurger";
import { observer } from "mobx-react-lite";
import MenuStore from "../../stores/MenuStore";

const Header = () => {
  const menu = useContext(MenuStore);

  return (
    <header className="site-header">
      <div className="site-header-content">
        <div className="site-header-user-icon">
          <img src={user} className="site-icon" alt="user icon" />
        </div>
        <div className="site-header-logo">
          <Link to="/">
            <span className="site-header-logo-pretty">may</span> {" "}
            <span>Hotel</span>
          </Link>
        </div>
        <MenuBurger onClick={menu.toggleMenu} />
      </div>
    </header>
  );
};

export default observer(Header);
