import { FC } from "react";

import { Link } from "react-router-dom";

import { HOME_ROUTE } from "../../../constants/routes";
import { useData } from "./useData";

const Profile: FC = () => {
  const data = useData();

  return (
    <div className="dark:bg-blue-600 bg-blue-300 card form-control w-full lg:w-3/5 bg-base-50 shadow-xl justify-center items-center p-2">
      <input
        type="text"
        placeholder={data.t("mainLayout.profile.name")}
        className="input input-bordered input-primary w-full max-w-xs my-2"
        value={data.name}
        onChange={data.userNameChangeHandler}
      />
      <select
        className="select select-info w-full max-w-xs my-2"
        onChange={(e) => data.handleChangeLanguage(e.target.value)}
      >
        <option disabled selected>
          {data.t("mainLayout.profile.language")}
        </option>
        <option value="en">{data.t("mainLayout.profile.english")}</option>
        <option value="fa">{data.t("mainLayout.profile.farsi")}</option>
      </select>
      <select
        className="select select-accent w-full max-w-xs my-2"
        id="darkModeSelect"
        value={data.isDarkMode ? "dark" : "light"}
        onChange={data.toggleDarkMode}
      >
        <option disabled selected>
          {data.t("mainLayout.profile.theme")}
        </option>
        <option value="dark">{data.t("mainLayout.profile.dark")}</option>
        <option value="light">{data.t("mainLayout.profile.light")}</option>
      </select>
      <Link to={HOME_ROUTE}>
        <button
          className="btn btn-success"
          onClick={() => data.submitHandler()}
        >
          {data.t("mainLayout.profile.save")}
        </button>
      </Link>
    </div>
  );
};

export default Profile;
