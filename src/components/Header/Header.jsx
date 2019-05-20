import React, { useContext } from "react";
import "./Header.scss";
import { user } from "../../utils/icons";
import { Link } from "react-router-dom";
import MenuBurger from "../MenuBurger/MenuBurger";
import { observer } from "mobx-react-lite";
import MenuStore from "../../stores/MenuStore";
import UserStore from "../../stores/UserStore";

const Header = () => {
  const user = useContext(UserStore);
  return (
    <header className="site-header">
      {user.isLoggedIn ? <HeaderContent /> : <AnonymousHeaderContent />}
    </header>
  );
};

const HeaderContent = () => {
  const menu = useContext(MenuStore);
  return (
    <div className="site-header-content">
      <div className="site-header-user-icon">
        <img src={user} className="site-icon" alt="user icon" />
      </div>
      <div className="site-header-logo">
        <Link to="/">
          <span className="site-header-logo-pretty">may</span>{" "}
          <span>Hotel</span>
        </Link>
      </div>
      <MenuBurger onClick={menu.toggleMenu} />
    </div>
  );
};

const AnonymousHeaderContent = () => (
  <div className="site-header-content anonymous">
    <div className="site-header-logo">
      <Link to="/">
        <span className="site-header-logo-pretty">may</span> <span>Hotel</span>
      </Link>
    </div>
  </div>
);
export default observer(Header);
