import React, { useContext } from "react";
import "./HomeView.scss";
import { observer } from "mobx-react-lite";
import Box from "../../components/Box/Box";
import HomeMenuList from "../../components/HomeMenuList/HomeMenuList";
import MenuStore from "../../stores/MenuStore";

const HomeView = () => {
  const menu = useContext(MenuStore);
  return (
    <>
      <div className="home-upper" />
      <Box className="home-view">
        <HomeMenuList list={menu.items} />
      </Box>
    </>
  );
};

export default observer(HomeView);
