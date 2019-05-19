import { observable, decorate } from "mobx";
import menuItems from "../utils/menuItems";
import { createContext } from "react";

class MenuStore {
  active = false;
  items = menuItems;

  toggleMenu = () => {
    this.active = !this.active;
  }

  closeMenu = () => {
    this.active = false;
  }
}


decorate(MenuStore, {
  active: observable,
  items: observable
});

export default createContext(new MenuStore());