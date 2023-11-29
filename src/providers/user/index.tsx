import { FC, ReactNode, useEffect, useState } from "react";

import Context from "./context";

const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string>("user");

  const updateUserName = (value: string) => {
    setUsername(value);
  };
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const parsedUserData = userData && JSON.parse(userData);

    parsedUserData && updateUserName(parsedUserData.name);
  }, []);

  return (
    <Context.Provider value={{ username, updateUserName }}>
      {children}
    </Context.Provider>
  );
};
export default UserProvider;
