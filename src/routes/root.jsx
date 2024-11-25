import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="px-2 py-3 h-lvh">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
