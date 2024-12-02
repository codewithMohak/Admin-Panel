import React from "react";
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App () {
  return(
    <Router>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <TopNav/>
        <div className="p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="mt-4 text-gray-600">Welcome to Admin Panel.</p>
        </div>
      </div>
    </div>
    </Router>
  )
}

export default App;