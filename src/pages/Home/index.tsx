import { FC, useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../../components/MainLayout/Navbar";
import Sidebar from "../../components/MainLayout/Sidebar";

const HomePage: FC = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  console.log(isSwapped, "isSwap");

  const handleSwapClick = () => {
    setIsSwapped(!isSwapped);
  };
  return (
    <>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div
          className={`drawer-content flex flex-col items-center justify-start ml-2 mt-2 ${
            isSwapped && "z-0 -mt-12"
          } `}
        >
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle swap swap-rotate drawer-button lg:hidden "
            onClick={handleSwapClick}
          >
            <svg
              className={`${isSwapped ? "swap-on" : "swap-off"} fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className={`${isSwapped ? "swap-off" : "swap-on"} fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            onClick={handleSwapClick}
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
