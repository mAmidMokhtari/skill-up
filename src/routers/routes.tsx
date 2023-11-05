import { lazy } from "react";

import {
  DASHBOARD_ROUTE,
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
  PROFILE_ROUTE,
  TODO_ROUTE,
  WEATHER_ROUTE,
} from "constants/routes";
import Profile from "pages/Home/Profile";
import Todo from "pages/Home/Todo";
import Weather from "pages/Home/Weather";
import { useRoutes } from "react-router-dom";

// protected
const HomePage = lazy(() => import("pages/Home"));
const DashboardPage = lazy(() => import("pages/Home/Dashboard"));

const NotFoundPage = lazy(() => import("pages/NotFound"));

export const Routes = () =>
  useRoutes([
    {
      path: HOME_ROUTE,
      element: <HomePage />,
      children: [
        {
          path: DASHBOARD_ROUTE,
          element: <DashboardPage />,
        },
        {
          path: PROFILE_ROUTE,
          element: <Profile />,
        },
        {
          path: TODO_ROUTE,
          element: <Todo />,
        },
        {
          path: WEATHER_ROUTE,
          element: <Weather />,
        },
      ],
    },
    {
      path: NOT_FOUND_ROUTE,
      element: <NotFoundPage />,
    },
  ]);
