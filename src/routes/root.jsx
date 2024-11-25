import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="p-2 h-lvh">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
