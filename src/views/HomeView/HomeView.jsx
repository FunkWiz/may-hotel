import React, { useContext } from "react";
import "./HomeView.scss";
import { observer } from "mobx-react-lite";
import Box from "../../components/Box/Box";
import HomeMenuList from "../../components/HomeMenuList/HomeMenuList";
import MenuStore from "../../stores/MenuStore";
import lobbyImg from "../../static/images/hotel-lobby-2.jpg";

const HomeView = () => {
  const menu = useContext(MenuStore);
  return (
    <>
      <div className="home-upper" style={{ backgroundImage: `url(${lobbyImg})` }} />
      <Box className="home-view">
        <HomeMenuList list={menu.homeItems} />
      </Box>
    </>
  );
};

export default observer(HomeView);
