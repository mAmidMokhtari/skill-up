import { useContext } from "react";

import context from "../providers/translate/context";

const useTranslate = () => useContext(context);

export default useTranslate;
