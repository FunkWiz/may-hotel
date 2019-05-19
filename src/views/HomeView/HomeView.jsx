import React from "react";
import "./HomeView.scss";
import { inject, observer } from "mobx-react";
import Box from "../../components/Box/Box";
import HomeMenuList from "../../components/HomeMenuList/HomeMenuList";

const HomeView = ({ user, menu }) => {
  return (
    <>
      <div className="home-upper" />
      <Box className="home-view">
        <HomeMenuList list={menu.items} />
      </Box>
    </>
  );
};

export default inject("user", "menu")(observer(HomeView));
