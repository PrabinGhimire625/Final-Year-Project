import React, { useEffect } from "react";
import Sidebar from "../../sidebar/Sidebar";
import { Link } from "react-router-dom";
import{useSelector,useDispatch} from "react-redux";
import { userProfile } from "../../../../store/authSlice";

const Profile = () => {
  const dispatch=useDispatch();
  const {profile,status}=useSelector((state)=>state.auth);
  console.log(profile);
  console.log(status)

  useEffect(()=>{
    dispatch(userProfile());
  },[dispatch])

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />

        <div className="flex items-start justify-center flex-1 bg-gray-500">
          <div className="w-full flex items-start bg-black px-12 py-12 rounded-lg shadow-lg ml-10">
            {/* Profile Image */}
            <div className="relative">
            <Link to={`/editProfile/${profile?._id}`}>
                {" "}
                <img className="object-cover rounded-full shadow-lg bg-indigo-50 text-indigo-600 h-40 w-40 md:h-56 md:w-56" src={profile?.image} alt="Profile"/>
                <p className="absolute top-2 right-2 text-sm md:text-lg text-gray-400 bg-gray-800 px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700 transition">
                  Edit
                </p>
              </Link>
            </div>

            {/* User Info */}
            <div className="text-left ml-4 mt-12 ">
              <Link to={`/editProfile/${profile?._id}`}>
                {" "}
                <h1 className="text-7xl md:text-12xl text-gray-200 font-bold">
                  {profile?.username}
                </h1>
              </Link>
              <p className="text-sm md:text-lg text-gray-400 ml-8 mt-4">
                . 6 Following
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
