import { ChangeEvent, useState } from "react";

import { useTranslation } from "react-i18next";

import useTranslate from "../../../hooks/useTranslate";
import useUser from "../../../hooks/useUser";

export const useData = () => {
  const { t } = useTranslation();

  const { updateUserName } = useUser();
  const { language, handleChangeLanguage } = useTranslate();

  const [name, setName] = useState("");

  const userNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const submitHandler = () => {
    updateUserName(name);
    const userData = { name, language };
    localStorage.setItem("userData", JSON.stringify(userData));
    setName("");
  };

  return {
    t,
    name,
    handleChangeLanguage,
    userNameChangeHandler,
    submitHandler,
  };
};
