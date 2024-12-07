import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setToken, userProfile } from '../../store/authSlice';


const Navbar = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {token,status, profile}=useSelector((state)=>state.auth);
    console.log(token);
    console.log(status);
 

    const [isLoggedIn, setIsloggedIn]=useState(false);

    useEffect(() => {
        const localStorageToken = localStorage.getItem('token');
        console.log(localStorageToken)
        console.log(token)
        if(localStorageToken){
          dispatch(setToken(localStorageToken))
        }
        setIsloggedIn(!!localStorageToken || !!token);
      }, [token,dispatch]);

  useEffect(()=>{
        dispatch(userProfile());
    },[dispatch])
    console.log(profile)
    const firstLetter =   profile?.username?.slice(0, 1) || '';

      // handle logout
    const handleLogout=()=>{
        localStorage.removeItem('token')
        setIsloggedIn(false);
        navigate("/login");
      }


    return (
        <>
            <header className="shadow-md font-[sans-serif] tracking-wide relative z-50">
                <section className="md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[80px] max-lg:min-h-[60px]">
                    <a href="javascript:void(0)" className="mr-10 max-sm:w-full max-sm:mb-3 shrink-0">
                        <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-[160px]" />
                    </a>
                    <div className="flex flex-wrap w-full items-center">
                        <div className="relative w-full lg:w-96">
                            <input
                                type="text"
                                placeholder="Search something..."
                                className="w-full bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all"
                            />
                            <div className="absolute mt-1 w-full bg-white border border-gray-200 shadow-md z-50 hidden">
                                <ul>
                                    <li className="px-4 py-2 border-b border-gray-200">Search Result 1</li>
                                    <li className="px-4 py-2 border-b border-gray-200">Search Result 2</li>
                                    <li className="px-4 py-2">No results found</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ml-auto max-lg:mt-4">
                            <ul className="flex items-center">
                                {
                                    !isLoggedIn ?(
                                        <>
                                            <Link to="/login">
                                                <button className="max-sm:hidden flex items-center justify-center text-[15px] max-lg:py-3 px-4 font-medium text-white bg-blue-700 cursor-pointer rounded-md h-8">
                                                    Login
                                                </button>
                                            </Link>
                                        </>
                                    ):(
                                        <>
                                        
                                        <button onClick={handleLogout} className="max-sm:hidden flex items-center justify-center text-[15px] max-lg:py-3 px-4 font-medium text-white bg-red-700 cursor-pointer rounded-md h-8">
                                                    Logout
                                        </button>        
                                        
                                        <Link to="/profile">
                                            <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] cursor-pointer">
                                                <div className="relative ml-3">
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="relative flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 text-white text-sm font-bold"
                                                        >
                                                            {firstLetter.toUpperCase()}
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Navbar;
