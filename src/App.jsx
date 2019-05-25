import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import HomeView from "./views/HomeView/HomeView";
import Layout from "./components/Layout/Layout";
import RestaurantView from "./views/RestaurantView/RestaurantView";
import ServiceView from "./views/ServiceView/ServiceView";
import CouponsView from "./views/CouponsView/CouponsView";
import SpaView from "./views/SpaView/SpaView";
import EventsView from "./views/EventsView/EventsView";
import LoginView from "./views/LoginView/LoginView";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import SignUpView from "./views/SignUpView/SignUpView";
import AnonymousRoute from "./components/Routes/AnonymousRoute";

const browserHistory = createBrowserHistory();

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

const App = () => {
  return (
    <Router basename="/" history={history}>
      <Layout>
        <AnonymousRoute path="/login" component={LoginView} />
        <AnonymousRoute path="/signup" component={SignUpView} />
        <ProtectedRoute path="/" component={HomeView} exact />
        <ProtectedRoute path="/restaurant" component={RestaurantView} />
        <ProtectedRoute path="/room-service" component={ServiceView} />
        <ProtectedRoute path="/coupons" component={CouponsView} />
        <ProtectedRoute path="/spa" component={SpaView} />
        <ProtectedRoute path="/events" component={EventsView} />
      </Layout>
    </Router>
  );
};

export default App;
