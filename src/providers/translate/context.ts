import { createContext } from "react";

export interface ITranslateRouteContext {
  language: string;
  handleChangeLanguage: (language: string) => void;
}

export default createContext<ITranslateRouteContext>({
  language: "en",
  handleChangeLanguage: () => {},
});
