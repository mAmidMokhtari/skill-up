import { Link, useLocation } from "react-router-dom";

import { HOME_ROUTE } from "../../../constants/routes";

const Navbar = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");

  return (
    <div className="bg-blue-50 p-4 text-xl breadcrumbs z-30 relative">
      <ul>
        <li>
          <Link to={HOME_ROUTE}>Home</Link>
        </li>
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
          return (
            <li key={path}>
              <Link to={routeTo}>{path}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
