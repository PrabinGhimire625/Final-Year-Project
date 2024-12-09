import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { deleteSong, listAllSong } from '../store/songSlice';

const ListSong = () => {
    const dispatch=useDispatch();
    const {song}=useSelector((state)=>state.song);
    console.log(song);
    

    useEffect(()=>{
      dispatch(listAllSong());
    },[])


    //delete song
    const handleDeleteSong = (songId) => {
      dispatch(deleteSong(songId)); // Dispatches the action
  };
  

  return (
    <>
      <div>
        <p className='font-bold text-lg'>All songs List</p>
        <br />
        <div>
          <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
            <b>Image</b>
            <b>Name</b>
            <b>Album</b>
            <b>Duration</b>
            <b>Action</b>
          </div>
          {
            song.map((item, index)=>{
              return(
                <div key={index} className='grid grid-cols-[1fr-1fr-1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 '>
                  <img className='w-12' src={item?.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.album}</p>
                  <p>{item.duration}</p>
                  <button onClick={() => handleDeleteSong(item._id)}>x</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ListSong
