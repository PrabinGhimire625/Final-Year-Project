import React, { useState } from 'react'
import { assets } from '../../assets/admin-assets/assets'
import {useDispatch, useSelector} from  "react-redux"
import { addAlbum } from '../../store/albumSlice';
import { STATUS } from '../../globals/components/Status';

const AddAlbum = () => {
  const dispatch=useDispatch();
  const {status, albums}=useSelector((state)=>state.album);
  console.log(status);
  console.log(albums)

  const [albumData, setAlbumData]=useState(({
    image:"",
    name:"",
    desc:"",
    bgColour:"#121212",
  }))


  const handleChange=(e)=>{
    const {name, value, files}=e.target;
    setAlbumData({
      ...albumData,
      [name]:name==='image' ? files[0]:value
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    dispatch(addAlbum(albumData));
    if (status === STATUS.SUCCESS) {
      alert('Successfully added the album');
      // navigate('/tables');
  } else {
      alert('Failed to add the album!');
  }
    
  }

  console.log(albumData)



  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col items-start gap-8 text-gray-600'>
        <div className='flex gap-8'>
         
          {/* upload image */}
          <div className='flex flex-col gap-4'>
            <p>Upload image</p>
            <input onChange={handleChange} type="file" name='image' id='image' accept='image/*' hidden />
            <label htmlFor="image">
              <img 
                src={albumData.image ? URL.createObjectURL(albumData.image) : assets.upload_area} 
                className='w-24 cursor-pointer' 
                alt="Uploaded preview or placeholder" 
              /> 
            </label>
          </div>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Album name</p>
          <input onChange={handleChange} name='name' className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px]' placeholder='Type Here' type="text" required/>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Album description</p>
          <textarea onChange={handleChange} name='desc' className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px]' placeholder='Type Here' type="text" required/>
        </div>


        <div className='flex flex-col gap-3'>
          <p>Background color</p>
          <input onChange={handleChange} type='color' name='bgColour'/>
        </div>

        <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>Add</button>
      </form>
    </>
  )
}

export default AddAlbum
