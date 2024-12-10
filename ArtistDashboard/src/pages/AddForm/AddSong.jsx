import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/admin-assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const AddSong = () => {
  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [albumData, setAlbumData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('audio', song);
      formData.append('album', album);

      const response = await axios.post("http://localhost:3000/api/song", formData);
      if (response.status === 200) {
        //toast.success("Song added successfully");
        alert("Song is added successfully")
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      } else {
        // toast.error("Something went wrong.");
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Something went wrong")
    }
  };


  const selectAlbumData= async()=>{
    try{
      const response=await axios.get("http://localhost:3000/api/album");
      if(response.status===200){
        setAlbumData(response.data.data)
      }else{
        alert("Unable to load album data");
      }
    }catch(err){
      alert("Error occured");
    }
  }


  useEffect(()=>{
    selectAlbumData();
  },[])


  return (
  
    <>
      <form onSubmit={handleSubmit} className='flex flex-col items-start gap-8 text-gray-600'>
        <div className='flex gap-8'>
          {/* upload song */}
          <div className='flex flex-col gap-4'>
            <p>Upload song</p>
            <input
              onChange={(e) => setSong(e.target.files[0])}
              type="file"
              id='song'
              accept='audio/*'
              hidden
            />
            <label htmlFor="song">
              <img src={song ? assets.upload_added : assets.upload_song} className='w-24 cursor-pointer' alt="" />
            </label>
          </div>

          {/* upload image */}
          <div className='flex flex-col gap-4'>
            <p>Upload image</p>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id='image'
              accept='image/*'
              hidden
            />
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" />
            </label>
          </div>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Song name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px]'
            placeholder='Type Here'
            type="text"
            required
          />
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Song description</p>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px]'
            placeholder='Type Here'
            required
          />
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Album</p>
          <select
            onChange={(e) => setAlbum(e.target.value)}
            value={album}
            className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[500px]'
          >
           
            {
              albumData.map((item, index) => (
                <option key={index} value={item?.name}>{item?.name}</option>
              ))
              
            }
          </select>
        </div>

        <button
          type='submit'
          className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'
        >
          Add
        </button>
      </form>
    </>
  )
};

export default AddSong;
