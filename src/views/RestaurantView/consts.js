import { breakfast } from "../../utils/icons";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import { generateTimes } from "../../utils/helpers";

export const metadata = {
  title: "חדר אוכל",
  icon: breakfast
};

export const pageLinks = [
  {
    title: "ארוחת בוקר",
    component: Breakfast,
    path: "/restaurant/breakfast"
  },
  {
    title: "ארוחת צהריים",
    component: Lunch,
    path: "/restaurant/lunch"
  },
  {
    title: "ארוחת ערב",
    component: Dinner,
    path: "/restaurant/dinner"
  }
];

export const mealSettings = {
  breakfast: {
    id: "5ce2b26024cd0935e47cb7ff",
    maxGuests: 4,
    times: generateTimes(8, 11),
    modalSuccess: {
      title: 'ארוחת בוקר'
    }
  },
  lunch: {
    maxGuests: 4,
    times: generateTimes(12, 15)
  },
  dinner: {
    maxGuests: 4,
    times: generateTimes(19, 22)
  }
};
