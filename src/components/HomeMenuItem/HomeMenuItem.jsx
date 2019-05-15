import React from "react";
import "./HomeMenuItem.scss";
import { Link } from "react-router-dom";

const HomeMenuItem = ({ title, iconUrl, urlTarget }) => (
  <li className="home-menu-item">
    <Link className="home-menu-item-link" to={urlTarget}>
      <div
        className="home-menu-item-icon"
        style={{
          backgroundImage: `url(${iconUrl})`
        }}
      />
      <span className="home-menu-item-title">{title}</span>
    </Link>
  </li>
);

export default HomeMenuItem;
