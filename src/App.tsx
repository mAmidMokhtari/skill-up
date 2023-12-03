import "./core/i18n";

import { Suspense } from "react";

import { SkeletonTheme } from "react-loading-skeleton";

import TranslateProvider from "./providers/translate";
import UserProvider from "./providers/user";
import Router from "./routers";

export default function App() {
  return (
    <Suspense
      fallback={<span className="loading loading-infinity loading-lg"></span>}
    >
      <SkeletonTheme baseColor="#9e9e9e">
        <TranslateProvider>
          <UserProvider>
            <Router />
          </UserProvider>
        </TranslateProvider>
      </SkeletonTheme>
    </Suspense>
  );
}
