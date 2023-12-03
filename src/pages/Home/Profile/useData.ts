import { ChangeEvent, useEffect, useState } from "react";

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

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const parsedUserData = userData && JSON.parse(userData);
    if (userData === null) return;
    const isDarkModeEnabled = localStorage.getItem(parsedUserData.isDarkMode);
    setIsDarkMode(isDarkModeEnabled === "true");
  }, []);

  const toggleDarkMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedMode = event.target.value === "dark";
    setIsDarkMode(updatedMode);
    document.documentElement.classList.toggle("dark", updatedMode);
  };

  const submitHandler = () => {
    updateUserName(name);
    const userData = { name, language, isDarkMode };
    localStorage.setItem("userData", JSON.stringify(userData));
    setName("");
  };

  return {
    t,
    name,
    isDarkMode,
    handleChangeLanguage,
    userNameChangeHandler,
    toggleDarkMode,
    submitHandler,
  };
};
