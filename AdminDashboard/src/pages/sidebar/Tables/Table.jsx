import React from "react";
import Users from "./users/Users";
import Sidebar from "../Sidebar";
import Artist from "./users/Artist";


const Tables = () => {
  return (
    <>
        <div className="flex h-screen bg-gray-100">
          <Sidebar/>

          <div className="flex flex-col flex-1 overflow-y-auto min-h-screen">
              <div className="p-4">
                <Users/>
                <Artist/>
       
              </div>
          </div>
       </div>
    </>
  );
};

export default Tables;
