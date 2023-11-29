import { useContext } from "react";

import context from "../providers/user/context";

const useUser = () => useContext(context);

export default useUser;
