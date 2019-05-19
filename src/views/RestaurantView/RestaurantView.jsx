import React from "react";
import "./RestaurantView.scss";
import { inject, observer } from "mobx-react";
import PageHeading from "../../components/PageHeading/PageHeading";
import RouteList from "../../components/RouteList/RouteList";
import { pageLinks, metadata } from "./consts";

const nestedRoutes = pageLinks.map(link => ({
  path: link.path,
  component: link.component
}));

const RestaurantView = ({ user }) => {
  return (
    <>
      <PageHeading title={metadata.title} icon={metadata.icon} links={pageLinks} />
      <div className="restaurant-view">
        <RouteList routes={nestedRoutes} />
      </div>
    </>
  );
};

export default inject("user")(observer(RestaurantView));
