import { FC } from "react";

import { Outlet } from "react-router-dom";

import Alert from "../../components/MainLayout/Alert";
import Navbar from "../../components/MainLayout/Navbar";
import Sidebar from "../../components/MainLayout/Sidebar";
import useUser from "../../hooks/useUser";
import { useData } from "./useData";

const HomePage: FC = () => {
  const data = useData();
  const { username } = useUser();

  return (
    <>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={data.isSwapped}
        />
        <div
          className="drawer-content flex flex-col items-center justify-start
          "
        >
          <div className="lg:hidden w-full self-start bg-blue-50 h-12">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-circle swap swap-rotate drawer-button "
              onClick={data.handleSwapClick}
            >
              <svg
                className={`${
                  data.isSwapped ? "swap-on" : "swap-off"
                } fill-current`}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className={`${
                  data.isSwapped ? "swap-off" : "swap-on"
                } fill-current`}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          {username === "user" || username === "" ? (
            <div className="w-1/3">
              <Alert />
            </div>
          ) : (
            ""
          )}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            onClick={data.handleSwapClick}
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar handleSwapClick={data.handleSwapClick} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
