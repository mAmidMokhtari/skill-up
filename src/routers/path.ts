import {
  HOME_ROUTE,
  PROFILE_ROUTE,
  TODO_ROUTE,
  WEATHER_ROUTE,
} from "../constants/routes";

export const path = [
  {
    label: "mainLayout.sidebar.dashboard",
    href: HOME_ROUTE,
  },
  {
    label: "mainLayout.sidebar.todo",
    href: TODO_ROUTE,
  },
  {
    label: "mainLayout.sidebar.weather",
    href: WEATHER_ROUTE,
  },
  {
    label: "mainLayout.sidebar.profile",
    href: PROFILE_ROUTE,
  },
];
