import React from "react";
import Sidebar from "../../../sidebar/Sidebar";

const EditProfile = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <div className="flex items-start justify-center flex-1 bg-gray-500">
          <div className=" flex items-start bg-black px-12 py-12 rounded-lg shadow-lg ml-10 relative">
            {/* Profile Image Upload */}
            <div className="relative">
              <label className="cursor-pointer">
                <img className="object-cover rounded-full shadow-lg bg-indigo-50 text-indigo-600 h-40 w-40 md:h-56 md:w-56" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile" />
                <input type="file" accept="image/*" className="hidden" />
              </label>
              <p className="absolute top-2 right-2 text-sm md:text-lg text-gray-400 bg-gray-800 px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700 transition">
                Upload
              </p>
            </div>

            {/* User Info */}
            <div className="text-left ml-4 mt-8">
              <input type="text" value="Prabin Ghimire" className="text-3xl md:text-6xl text-gray-200 font-bold bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-indigo-400 ml-5 py-1 leading-tight"/>
            </div>

            {/* Save Button */}
            <button className="absolute bottom-4 right-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
