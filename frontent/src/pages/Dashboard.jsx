import React from "react";
import StatsCard from "../components/StatsCard";
import LiveStats from "../components/LiveStats";
import ActivityFeed from "../components/ActivityFeed";
import { FaUsers, FaDollarSign, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Stats */}
        <StatsCard title="Total Users" value="1,234" icon={<FaUsers />} />
        <StatsCard title="Revenue" value="$12,345" icon={<FaDollarSign />} />
        <StatsCard title="Growth" value="25%" icon={<FaChartLine />} />
        
        <LiveStats title="Total Users" value="1,234" />
        <LiveStats title="Revenue" value="$12,345" />
        <LiveStats title="Growth" value="25%"  />
      </div>
      <ActivityFeed />
    </div>
  );
};

export default Dashboard;
