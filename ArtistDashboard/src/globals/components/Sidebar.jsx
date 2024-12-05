import React from 'react'
import { assets } from '../../assets/admin-assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className='bg-[#003A10] min-h-screen pl-[4vw] pr-10'>
        <img src={assets.logo} className='mt-5 w-[max(10vw, 100px)] hidden sm:block' alt="" />
        <img src={assets.logo_small} className='mt-5 w-[max(5vw, 40px)] mr-5 sm:hidden block' alt="" />

        <div className='flex flex-col gap-5 mt-10 mr-12'>
          {/* add song */}
          <Link to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
            <img src={assets.add_song} className='w-5' alt="" />
            <p className='hidden sm:block'>Add Song</p> 
          </Link>

          {/* List song */}
          <Link to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
            <img src={assets.song_icon} className='w-5' alt="" />
            <p className='hidden sm:block'>List Song</p> 
          </Link>

          {/* add Album */}
          <Link to="/add-album" className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
            <img src={assets.add_album} className='w-5' alt="" />
            <p className='hidden sm:block'>Add Album </p> 
          </Link>

          {/* List album */}
          <Link to="/list-album" className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
            <img src={assets.album_icon} className='w-5' alt="" />
            <p className='hidden sm:block'>List Album</p> 
          </Link>

        </div>
      </div>
    </>
  )
}

export default Sidebar
