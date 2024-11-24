import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="bg-gray-800 text-white shadow-md">
          <div className="px-4 py-4 flex justify-between items-center ">
            {/* Logo */}
            <div className="text-xl font-bold">Book My Show</div>
    
            {/* Navigation Links */}
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-gray-400">Dashboard</Link>
              <Link to="/movies" className="hover:text-gray-400">Movies</Link>
              <Link to="/theaters" className="hover:text-gray-400">Theaters</Link>
              <Link to="/users" className="hover:text-gray-400">Users</Link>
              <Link to="/settings" className="hover:text-gray-400">Settings</Link>
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
