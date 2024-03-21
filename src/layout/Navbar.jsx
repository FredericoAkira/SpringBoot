import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-100%">
      <nav className="bg-black border-gray-200 dark:bg-gray-900">
        <div className="bg-red-800 w-100% mx-auto p-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-white text-2xl flex items-center space-x-3 rtl:space-x-reverse">
              Fullstack Application
            </a>
            <Link className="bg-white hover:bg-red-500 hover:text-white text-red-800 font-bold py-2 px-4 rounded" to="/login">
              Login
            </Link>
            <Link className="bg-white hover:bg-red-500 hover:text-white text-red-800 font-bold py-2 px-4 rounded" to="/addUser">
              Add User
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
