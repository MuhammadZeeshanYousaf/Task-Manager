import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      Task Manager
      <br />
      <br />
      <Outlet />
    </div>
  );
}

export default Layout;
