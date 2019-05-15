import { observable, decorate } from "mobx";
import menuItems from '../utils/menuItems'

export default class MenuStore {
    items = menuItems
}

decorate(MenuStore, {
    items: observable
})