import React from "react";
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6 space-y-6">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <ul className="space-y-4 mt-6">
        <li>
          <Link
            to="/dashboard"
            className="text-lg hover:bg-gray-700 p-2 rounded-md block">
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-lg hover:bg-gray-700 p-2 rounded-md block">
            User
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="text-lg hover:bg-gray-700 p-2 rounded-md block">
            Settings
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-lg hover:bg-gray-700 p-2 rounded-md block">
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
