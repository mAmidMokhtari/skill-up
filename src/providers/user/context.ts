import { createContext } from "react";

export interface UserContextType {
  username: string;
  updateUserName: (value: string) => void;
}

export default createContext<UserContextType>({
  username: "user",
  updateUserName: () => {},
});
