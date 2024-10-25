import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../../../assets/frontend-assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // for profile dropdown
  const dropdownRef = useRef(null); // reference to the dropdown

  // Function to handle click outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false); // close the dropdown
    }
  };

  useEffect(() => {
    // Add event listener when the dropdown is open
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_left}
            alt=''
            onClick={() => navigate(-1)} // Navigate backward
          />
          <img
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_right}
            alt=''
            onClick={() => navigate(1)} // Navigate forward
          />
        </div>

        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <input  type="text"  placeholder="Search"  className="w-96 bg-gray-900 p-2 border-white rounded-md f" />
            <img className='w-6' src={assets.search_icon} alt="" />
        </div>

        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
            Explore Premium
          </p>
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>
            Install App
          </p>

          <div className='relative' ref={dropdownRef}>
            <Link to="/login"
              className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              P
            </Link>
            {/* Dropdown Menu */}
            <ul
              id='dropdownMenu'
              className={`mt-5 absolute right-0 block shadow-lg bg-black text-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto ${
                dropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <li className='hover:text-red-700 py-2.5 px-5 flex items-center hover:bg-gray-100 text-sm cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 mr-3'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <path d='M12 6v6l4 2'></path>
                </svg>
                <Link to='/profile'>Account</Link>
              </li>
              <li className='hover:text-red-700 py-2.5 px-5 flex items-center hover:bg-gray-100 text-sm cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 mr-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                  <path d='M12 14l6.16 3.422-6.16 3.578L5.84 17.422 12 14z'></path>
                </svg>
                <Link to='/orderHistory'>Profile</Link>
              </li>
              <li className='hover:text-red-700 py-2.5 px-5 flex items-center hover:bg-gray-100 text-sm cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 mr-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M3 12l2-2m0 0l7-7 7 7M13 5l7 7m-7 7v-8'></path>
                </svg>
                <Link to='/reviews'>Upgrade to Premium</Link>
              </li>
              <li className='hover:text-red-700 py-2.5 px-5 flex items-center hover:bg-gray-100 text-sm cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 mr-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='3'></circle>
                  <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a1.65 1.65 0 0 1-2.34 2.34l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51v.1a1.65 1.65 0 0 1-3.3 0v-.1a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a1.65 1.65 0 0 1-2.34-2.34l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H5a1.65 1.65 0 0 1 0-3.3h.1a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a1.65 1.65 0 0 1 2.34-2.34l.06.06a1.65 1.65 0 0 0 1.82.33h.1a1.65 1.65 0 0 0 1-1.51V5a1.65 1.65 0 0 1 3.3 0v.1a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a1.65 1.65 0 0 1 2.34 2.34l-.06.06a1.65 1.65 0 0 0-.33 1.82v.1a1.65 1.65 0 0 0 1.51 1h.1a1.65 1.65 0 0 1 0 3.3h-.1a1.65 1.65 0 0 0-1.51 1z'></path>
                </svg>
                <Link to='/returns'>Settings</Link>
              </li>
              <li className='hover:text-red-700 py-2.5 px-5 flex items-center hover:bg-gray-100 text-sm cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-3 h-3 mr-3'
                >
                  <path d='M3 3v18h18'></path>
                </svg>
                <Link to='/'>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
