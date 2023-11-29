import { useTranslation } from "react-i18next";

import useUser from "../../../hooks/useUser";

export const useData = () => {
  const { t } = useTranslation();

  const { username } = useUser();

  const currentDate = new Date();

  const displayTime = () => {
    return `${String(currentDate.getHours()).padStart(2, "0")}:${String(
      currentDate.getMinutes()
    ).padStart(2, "0")}`;
  };
  return { t, username, displayTime };
};
