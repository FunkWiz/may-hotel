import React from "react";
import "./Menu.scss";
import menuItems from "../../utils/menuItems";
import { inject, observer } from "mobx-react";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";

const Menu = ({ menu }) => {
    const closeMenu = () => menu.active = false;
    return (
        <div className={classNames(
            "site-menu",
            { "active": menu.active }
        )}>
            <div className="menu-shadow" onClick={closeMenu} />
            <div className="menu-list-wrapper">
                <MenuList items={menuItems} onItemClick={closeMenu} />
            </div>
        </div>
    )
}

const _menuList = ({ items, onItemClick }) => (
    <ul className="menu-list">
        {items.map((item, idx) => {
            const isSelected = window.location.href.includes(item.urlTarget.split('/')[1]);
            return <MenuItem key={idx} {...item} selected={isSelected} onClick={onItemClick} />
        })}
    </ul>
);
const MenuList = withRouter(_menuList);

const MenuItem = ({ title, iconUrl, urlTarget, onClick, selected }) => (
    <li className={classNames("menu-item", { "selected": selected })}>
        <Link className="menu-item-link" to={urlTarget} onClick={onClick}>
            <div className="menu-item-icon-wrapper">
                <img className="site-icon menu-item-icon" src={iconUrl} />
            </div>
            <span className="menu-item-title">{title}</span>
        </Link>
    </li>
)
export default inject("menu")(observer(Menu));