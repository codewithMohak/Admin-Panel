import React from "react";

const TopNav = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">Admin Panel</div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-gray-800">Notifications</button>
        <button className="text-gray-600 hover:text-gray-800">Profile</button>
        <button className="text-gray-600 hover:text-gray-800">Logout</button>
      </div>
    </div>
  );
};

export default TopNav;
