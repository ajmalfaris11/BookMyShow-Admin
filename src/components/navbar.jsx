import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-red-600 text-white shadow-md rounded-xl">
      <div className="px-4 py-2 flex justify-between items-center ">
        {/* Logo */}
        <div className="w-32 pt-2">
          <img src="https://logodix.com/logo/2011021.png" alt=" logo img" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 font-medium">
          <Link to="/" className="hover:underline">
            dashboard
          </Link>
          <Link to="/movies" className="hover:underline">
            movies
          </Link>
          <Link to="/theaters" className="hover:underline">
            theaters
          </Link>
          <Link to="/users" className="hover:underline">
            users
          </Link>
          <Link to="/settings" className="hover:underline">
            settings
          </Link>
        </div>

        {/* Logout Button */}
        <div>
          <button className="bg-white hover:bg-red-600 hover:border-white border-2 border-red-600 hover:text-white text-red-600 font-semibold  px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
