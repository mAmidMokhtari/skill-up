import { FC } from "react";

import { useData } from "./useData";

const Dashboard: FC = () => {
  const data = useData();

  return (
    <div className="flex flex-col items-center pb-20">
      <h2 className="md:text-5xl lg:text-9xl p-4">{data.displayTime()}</h2>
      <p className="md:text-3xl lg:text-7xl p-4">
        {data.t("mainLayout.dashboard.good morning")}
        {data.username ? (
          <span>{data.username}</span>
        ) : (
          <span>{data.t("mainLayout.dashboard.user")}</span>
        )}
      </p>
    </div>
  );
};

export default Dashboard;
