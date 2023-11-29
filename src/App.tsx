import "./core/i18n";

import { Suspense } from "react";

import TranslateProvider from "./providers/translate";
import UserProvider from "./providers/user";
import Router from "./routers";

export default function App() {
  return (
    <Suspense
      fallback={<span className="loading loading-infinity loading-lg"></span>}
    >
      <TranslateProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </TranslateProvider>
    </Suspense>
  );
}
