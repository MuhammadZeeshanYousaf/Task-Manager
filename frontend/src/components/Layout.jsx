import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar/>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
