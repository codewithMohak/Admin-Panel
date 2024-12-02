import React from "react";

const LiveStats =({title,value})=>{
    return(
        <div className="p-6" bg-white rounded-lg shadow-md>
            <h4 className="text-lg font-bold text-gray-700">{title}</h4>
            <p className="text 3xl font-semibold text-blue-500">{value}</p>
        </div>
    )
}
export default LiveStats;