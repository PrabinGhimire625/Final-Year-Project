import React from 'react';
import Sidebar from '../../sidebar/Sidebar';

const Profile = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />

        <div className="flex items-start justify-center flex-1 bg-gray-500">
          <header className="w-full px-4 py-8 flex flex-col justify-center items-center text-center bg-black rounded-lg shadow-lg">
            <img
              className="object-cover rounded-full shadow-lg bg-indigo-50 text-indigo-600 h-24 w-24 md:h-48 md:w-48"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
            />
            <h1 className="text-2xl text-gray-200 font-bold mt-4">John Doe</h1>
            <h2 className="text-base md:text-xl text-gray-300 font-bold">
              Lead Software Engineer @{' '}
              <a
                href="#"
                target="_blank"
                className="text-indigo-400 hover:text-indigo-200 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all"
                rel="noopener noreferrer"
              >
                XYZ
              </a>
            </h2>
          </header>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
