import React from "react";
import { FaUser, FaShoppingCart, FaBell } from "react-icons/fa";

const activities = [
    { icon: <FaUser />, text: "New user registered: John Doe", time: "2 mins ago" },
    { icon: <FaShoppingCart />, text: "Order #12345 placed", time: "10 mins ago" },
    { icon: <FaBell />, text: "System alert: Low inventory", time: "30 mins ago" },
  ];

  const ActivityFeed = () => {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h4 className="text-lg font-bold">Recent Activity</h4>
        <ul className="mt-4 space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-center space-x-4">
              <div className="p-2 bg-blue-500 text-white rounded-full">{activity.icon}</div>
              <div>
                <p className="text-gray-800">{activity.text}</p>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ActivityFeed;