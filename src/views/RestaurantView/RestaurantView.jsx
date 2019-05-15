import React from "react";
import "./RestaurantView.scss";
import { inject, observer } from "mobx-react";
import Box from "../../components/Box/Box";
import PageHeading from "../../components/PageHeading/PageHeading";
import RouteList from "../../components/RouteList/RouteList";
import { Route } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import pageLinks from "./pageLinks";

const nestedRoutes = pageLinks.map(link => ({
  to: link.path,
  component: link.component
}));

const RestaurantView = ({ user }) => {
  return (
    <>
      <PageHeading links={pageLinks} />
      <RouteList routes={nestedRoutes} />
    </>
  );
};

export default inject("user")(observer(RestaurantView));
