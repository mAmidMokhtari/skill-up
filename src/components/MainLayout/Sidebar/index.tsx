import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { path } from "../../../routers/path";

const Sidebar = ({ handleSwapClick }) => {
  const { t } = useTranslation();
  return (
    <ul className="menu justify-center bg-blue-100 w-72 min-h-full font-semibold text-xl text-base-content">
      {path.map((item) => (
        <li
          className="pb-8 relative"
          onClick={handleSwapClick}
          key={item.label}
        >
          <Link to={item.href}>{t(item.label)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
