import React from "react";
import "./DiningRoomView.scss";
import { inject, observer } from "mobx-react";
import Box from "../../components/Box/Box";
import { Route } from "react-router-dom";
import HomeView from "../HomeView/HomeView";

const DiningRoomView = ({ user }) => {
    return (
        <>

        </>
    );
};

export default inject("user")(observer(DiningRoomView));
