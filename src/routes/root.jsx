import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="p-2 pb-0 h-lvh overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
