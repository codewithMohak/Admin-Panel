import React from "react";

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
      <div className="p-4 bg-blue-500 text-white rounded-full">
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
