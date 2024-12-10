import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { deleteAlbum, listAllAlbum } from "../../store/albumSlice"
import { Link } from 'react-router-dom';

const ListAlbum = () => {
    const dispatch=useDispatch();
    const {albums}=useSelector((state)=>state.album);
    console.log(albums);
    

    useEffect(()=>{
      dispatch(listAllAlbum());
    },[])


    const handleDeleteAlbum=(albumId)=>{
      dispatch(deleteAlbum(albumId));
    }

  
  return (
    <>
      <div>
        <p className='font-bold text-lg'>All Album List</p>
        <br />
        <div>
          <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
            <b>Image</b>
            <b>Name</b>
            <b>Description</b>
            <b>Background color</b>
            <b>Action</b>
          </div>
          {
            albums.map((item, index)=>{
              return(
                <Link to={`/editAlbum/${item._id}`}>
                  <div key={index} className='grid grid-cols-[1fr-1fr-1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 '>
                  <img className='w-12' src={item?.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.desc}</p>
                  <p>{item.bgColour}</p>
                  <button onClick={() => handleDeleteAlbum(item._id)}>x</button>
                </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ListAlbum
