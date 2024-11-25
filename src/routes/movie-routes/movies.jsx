import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Movies() {
  return (
    <div className="flex mt-2" style={{ height: "calc(100vh - 100px)" }}>
      <div className="flex flex-col bg-white text-black  w-3/12 h-full rounded-xl overflow-hidden overflow-y-scroll">
        <div className="flex flex-col w-full font-semibold px-3 py-5">
          <Link
            to="/movies"
            className="hover:text-red-600 flex justify-center border-b-[2px] hover:border-red-600 border-red-600 py-3 text-red-600 "
          >
            ALL MOVIE
          </Link>
          <Link
            to="/movies/adMv"
            className="hover:text-red-600 flex justify-center border-b-[2px] hover:border-red-600 border-white py-3 "
          >
            ADD MOVIE
          </Link>
          <Link
            to="/movies/dlMv"
            className="hover:text-red-600 flex justify-center border-b-[2px] hover:border-red-600 border-white py-3 "
          >
            DELETE MOVIE
          </Link>
          
        </div>
      </div>
      <Outlet />
    </div>
  );
}
