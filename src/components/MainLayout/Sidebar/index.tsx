import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import {
  DASHBOARD_ROUTE,
  PROFILE_ROUTE,
  TODO_ROUTE,
  WEATHER_ROUTE,
} from "../../../constants/routes";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <ul className="menu justify-center bg-blue-100 w-72 min-h-full font-semibold text-xl text-base-content">
      <li className="pb-8">
        <Link to={DASHBOARD_ROUTE}>{t("mainLayout.sidebar.dashboard")}</Link>
      </li>
      <li className="pb-8">
        <Link to={TODO_ROUTE}>{t("mainLayout.sidebar.todo")}</Link>
      </li>
      <li className="pb-8">
        <Link to={WEATHER_ROUTE}>{t("mainLayout.sidebar.weather")}</Link>
      </li>
      <li className="pb-8">
        <Link to={PROFILE_ROUTE}>{t("mainLayout.sidebar.profile")}</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
