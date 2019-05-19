import React from "react";
import "./RestaurantView.scss";
import PageHeading from "../../components/PageHeading/PageHeading";
import RouteList from "../../components/RouteList/RouteList";
import { pageLinks, metadata } from "./consts";

const nestedRoutes = pageLinks.map(link => ({
  path: link.path,
  component: link.component
}));

const RestaurantView = () => {
  return (
    <>
      <PageHeading title={metadata.title} icon={metadata.icon} links={pageLinks} />
      <div className="restaurant-view">
        <RouteList routes={nestedRoutes} />
      </div>
    </>
  );
};

export default RestaurantView;
