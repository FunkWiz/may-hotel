import { observable, computed, action, decorate } from "mobx";
import { UserApi } from '../utils/api';
import { createContext } from "react";

class UserStore {
    async login() {
        const _user = await UserApi.get(2);
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
})

export default createContext(new UserStore());