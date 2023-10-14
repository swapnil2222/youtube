import React from "react";
import AppSideBar from "./AppSideBar";

import { Outlet, useLocation } from "react-router-dom";

function AppContainer() {
  const location = useLocation();
  const currentRoute = location.pathname;

  const heightClass = currentRoute=== '/'? 'h-[calc(100vh-64px)]': ''
  return (
    <div className="flex flex-row space-x-6 bg-white">
      <div className="flex h-[calc(100vh-64px)]">
        <AppSideBar />
      </div>
      <div className={`flex w-full ${heightClass} overflow-auto`}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppContainer;
