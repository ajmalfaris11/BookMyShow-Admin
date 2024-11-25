import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white text-black shadow-md rounded-lg">
      <div className="px-4 py-4 flex justify-between items-center ">
        {/* Logo */}
        <div className="w-32">
          <img src="https://hackerx.org/wp-content/uploads/job-manager-uploads/company_logo/2022/06/BMS-Logo-Grey.png" alt="" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 font-semibold">
          <Link to="/" className="hover:text-red-600">
            Dashboard
          </Link>
          <Link to="/movies" className="hover:text-red-600">
            Movies
          </Link>
          <Link to="/theaters" className="hover:text-red-600">
            Theaters
          </Link>
          <Link to="/users" className="hover:text-red-600">
            Users
          </Link>
          <Link to="/settings" className="hover:text-red-600">
            Settings
          </Link>
        </div>

        {/* Logout Button */}
        <div>
          <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
