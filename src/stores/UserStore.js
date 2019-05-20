import { observable, computed, action, decorate } from "mobx";
import { UserApi } from "../utils/api";
import { createContext } from "react";

class UserStore {
  async login(email, password) {
    const _user = await UserApi.login(email, password);
    console.log(_user);
    if (_user == null) return;
    this.user = _user;
  }

  get isLoggedIn() {
    return this.user != null;
  }
}

decorate(UserStore, {
  isLoggedIn: computed,
  login: action,
  user: observable
});

export default createContext(new UserStore());
