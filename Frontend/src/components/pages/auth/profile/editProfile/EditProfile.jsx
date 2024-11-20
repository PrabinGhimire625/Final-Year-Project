import React, { useEffect, useState } from "react";
import Sidebar from "../../../sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile, userProfile } from "../../../../../store/authSlice";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile, status } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    username: "",
    image: null,
  });

  useEffect(() => {
    dispatch(userProfile(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (profile) {
      setUserData({
        username: profile.username || "",
        image: null, // Keep null to handle file input changes
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setUserData({
      ...userData,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", userData.username);
    if (userData.image) formData.append("image", userData.image);

    dispatch(updateUserProfile({ id, userData: formData }));
  };

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <div className="flex items-start justify-center flex-1 bg-gray-500">
          <form
            className="flex items-start bg-black px-12 py-12 rounded-lg shadow-lg ml-10 relative"
            onSubmit={handleSubmit}
          >
            {/* Profile Image Upload */}
            <div className="relative">
              <label className="cursor-pointer">
                <img
                  className="object-cover rounded-full shadow-lg bg-indigo-50 text-indigo-600 h-40 w-40 md:h-56 md:w-56"
                  src={
                    userData.image
                      ? URL.createObjectURL(userData.image)
                      : profile?.image
                  }
                  alt="Profile"
                />
                <input
                  name="image"
                  onChange={handleChange}
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="absolute top-2 right-2 text-sm md:text-lg text-gray-400 bg-gray-800 px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700 transition">
                Upload
              </p>
            </div>

            {/* User Info */}
            <div className="text-left ml-4 mt-8">
              <input
                name="username"
                onChange={handleChange}
                type="text"
                value={userData.username}
                className="text-3xl md:text-6xl text-gray-200 font-bold bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-indigo-400 ml-5 py-1 leading-tight"
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="absolute bottom-4 right-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
