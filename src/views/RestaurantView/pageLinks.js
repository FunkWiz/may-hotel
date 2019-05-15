import { breakfast, lunch, dinner } from "../../utils/icons";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";

export default [
  {
    title: "ארוחת בוקר",
    component: Breakfast,
    path: "/restaurant/breakfast",
    icon: breakfast
  },
  {
    title: "ארוחת צהריים",
    component: Lunch,
    path: "/restaurant/lunch",
    icon: lunch
  },
  {
    title: "ארוחת ערב",
    component: Dinner,
    path: "/restaurant/dinner",
    icon: dinner
  }
];
