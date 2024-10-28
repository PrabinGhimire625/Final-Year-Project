import React from 'react'
import { assets } from '../assets/admin-assets/assets'

const AddSong = () => {
  return (
    <>
      <form className='flex flex-col items-start gap-8 text-gray-600'>
        <div className='flex gap-8'>
          {/* upload image */}
          <div className='flex flex-col gap-4'>
            <p>Upload song</p>
            <input type="file" id='song' accept='audio/*' hidden />
            <label htmlFor="song">
              <img src={assets.upload_song} className='w-24 cursor-pointer' alt="" /> 
            </label>
          </div>

          {/* upload image */}
          <div className='flex flex-col gap-4'>
            <p>Upload image</p>
            <input type="file" id='image' accept='image/*' hidden />
            <label htmlFor="image">
              <img src={assets.upload_area} className='w-24 cursor-pointer' alt="" /> 
            </label>
          </div>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Song name</p>
          <input className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px]' placeholder='Type Here' type="text" required/>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Song description</p>
          <textarea className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px]' placeholder='Type Here' type="text" required/>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Album</p>
          <select className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px] '>
            <option value="none">None</option>
          </select>
        </div>

        <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer '>Add</button>
      </form>

    </>
  )
}

export default AddSong
