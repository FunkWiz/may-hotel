import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import HomeView from "./views/HomeView/HomeView";
import Layout from "./components/Layout/Layout";
import UserStore from "./stores/UserStore";
import MenuStore from "./stores/MenuStore";
import RestaurantView from "./views/RestaurantView/RestaurantView";

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const userStore = new UserStore();
const menuStore = new MenuStore();
const stores = {
  routing: routingStore,
  user: userStore,
  menu: menuStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);
const App = () => {
  return (
    <Provider {...stores}>
      <Router basename="/" history={history}>
        <Layout>
          <Route path="/" component={HomeView} exact />
          <Route path="/restaurant" component={RestaurantView} />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
