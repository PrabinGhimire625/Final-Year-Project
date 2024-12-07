import React from 'react'
import { assets } from '../../assets/admin-assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className='bg-[hsl(137,100%,11%)] min-h-screen pl-[4vw] pr-[4vw]'>
        
        {/* artist profile image */}
        <div className="flex justify-center  mt-10">
              <label className="cursor-pointer">
                <img
                  className="object-cover rounded-full shadow-lg bg-indigo-50 text-indigo-600 h-20 w-20 md:h-28 md:w-28"
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s"} // Display placeholder if no image is selected
                  alt="fdsg"
                />
                <input
                  
                  type="file"
                  accept="image/*"
                  name="image"
                  className="hidden"
                />
              </label>
        </div>

        <div className='flex flex-col gap-5'>
          <button  
            className='my-10 flex items-center gap-2.5 text-white p-2 pr-[max(8vw, 10px)] text-xl '>
            <p className='hidden sm:block'>Add the song with your album</p> 
        </button>

             {/* add song */}
             <Link to='/dashboard' className=' flex items-center gap-2.5 text-red-900 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#000000] text-lg font-medium font-bold'>
              
              <p className='hidden sm:block '>Dashboard</p> 
            </Link>


            {/* add song */}
            <Link to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#000000] text-sm font-medium'>
              <img src={assets.add_song} className='w-5' alt="" />
              <p className='hidden sm:block'>Add song</p> 
            </Link>

          {/* List song */}
          <Link to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#000000] text-sm font-medium'>
            <img src={assets.song_icon} className='w-5' alt="" />
            <p className='hidden sm:block'>List Song</p> 
          </Link>

          {/* add Album */}
          <Link to="/add-album" className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#000000] text-sm font-medium'>
            <img src={assets.add_album} className='w-5' alt="" />
            <p className='hidden sm:block'>Add Album </p> 
          </Link>

          {/* List album */}
          <Link to="/list-album" className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#000000] text-sm font-medium'>
            <img src={assets.album_icon} className='w-5' alt="" />
            <p className='hidden sm:block'>List Album</p> 
          </Link>

        </div>
      </div>
    </>
  )
}

export default Sidebar
