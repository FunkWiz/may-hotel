import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import HomeView from "./views/HomeView/HomeView";
import Layout from "./components/Layout/Layout";
import RestaurantView from "./views/RestaurantView/RestaurantView";
import ServiceView from "./views/ServiceView/ServiceView";
import CouponsView from "./views/CouponsView/CouponsView";

const browserHistory = createBrowserHistory();

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const App = () => {
  return (
    <Router basename="/" history={history}>
      <Layout>
        <Route path="/" component={HomeView} exact />
        <Route path="/restaurant" component={RestaurantView} />
        <Route path="/room-service" component={ServiceView} />
        <Route path="/coupons" component={CouponsView} />
      </Layout>
    </Router>
  );
};

export default App;
