import { observable, decorate } from "mobx";
import menuItems from "../utils/menuItems";

export default class MenuStore {
  active = false;
  items = menuItems;
}

decorate(MenuStore, {
  active: observable,
  items: observable
});
