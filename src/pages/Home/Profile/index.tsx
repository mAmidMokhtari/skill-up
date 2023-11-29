import { FC } from "react";

import { useData } from "./useData";

const Profile: FC = () => {
  const data = useData();

  return (
    <div className="card form-control w-full lg:w-3/5 bg-base-50 shadow-xl justify-center items-center p-2">
      <label className="label">
        <span className="label-text">{data.t("mainLayout.profile.name")}</span>
      </label>
      <input
        type="text"
        placeholder={data.t("mainLayout.profile.username")}
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
      <select className="select select-accent w-full max-w-xs my-2">
        <option disabled selected>
          {data.t("mainLayout.profile.theme")}
        </option>
        <option>{data.t("mainLayout.profile.dark")}</option>
        <option>{data.t("mainLayout.profile.light")}</option>
      </select>
      <button className="btn btn-success" onClick={() => data.submitHandler()}>
        {data.t("mainLayout.profile.save")}
      </button>
    </div>
  );
};

export default Profile;
