import React, { useState } from 'react'
import { assets } from '../assets/admin-assets/assets'

const AddSong = () => {

  const [image,setImage]=useState(false);
  const [song,setSong]=useState(false);
  const [name,setName]=useState("");
  const [desc,setDesc]=useState("");
  const [album,setAlbum]=useState("none");
  const [loading,setLoading]=useState(false);
  const [albumData,setAlbumData]=useState([]);

  // const [songData, setSongData] = useState({
  //   image: false,
  //   song: false,
  //   name: "",
  //   desc: "",
  //   album: "none",
  //   loading: false,
  //   albumData: [],
  // });
  


  const handleSubmit=async(e)=>{
    e.preventDefault();
  }


  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>

      </div>

    </div>

  ):  (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col items-start gap-8 text-gray-600'>
        <div className='flex gap-8'>
          {/* upload image */}
          <div className='flex flex-col gap-4'>
            <p>Upload song</p>
            <input  onChange={(e)=>setSong(e.target.files[0])} type="file" id='song' accept='audio/*' hidden />
            <label htmlFor="song">
              <img src={song ? assets.upload_added : assets.upload_song} className='w-24 cursor-pointer' alt="" /> 
            </label>
          </div>

          {/* upload image */}
          <div className='flex flex-col gap-4'>
            <p>Upload image</p>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" /> 
            </label>
          </div>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Song name</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px]' placeholder='Type Here' type="text" required/>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Song description</p>
          <textarea onChange={(e)=>setDesc(e.target.value)}  value={desc} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px]' placeholder='Type Here' type="text" required/>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Album</p>
          <select onChange={(e)=>setAlbum(e.target.value)} defaultValue={album} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px] '>
            <option value="none">None</option>
          </select>
        </div>

        <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>Add</button>
      </form>

    </>
  )
}

export default AddSong
