import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Movies() {
  return (
    <div className="flex mt-2 h-full">
      <div className="flex flex-col bg-red-600 text-white  w-3/12 h-full rounded-xl overflow-hidden overflow-y-scroll">
        <div className="flex flex-col w-full font-semibold px-3 py-2 gap-1">
          <div className=" rounded-lg  py-3">R o u t e r  methods</div>
          <Link
            to="/movies"
            className="flex justify-center bg-red-800 hover:bg-red-700 rounded-lg  py-3"
          >
            ALL MOVIE
          </Link>
          <Link
            to="/movies/adMv"
            className="flex justify-center  hover:bg-red-700 rounded-lg  py-3 "
          >
            ADD MOVIE
          </Link>
          <Link
            to="/movies/dlMv"
            className="flex justify-center  hover:bg-red-700 rounded-lg py-3 "
          >
            DELETE MOVIE
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
