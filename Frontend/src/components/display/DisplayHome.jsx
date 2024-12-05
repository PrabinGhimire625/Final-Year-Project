import React from 'react'
import Navbar from '../../globals/components/navbar/Navbar'
import { albumsData, songsData } from '../../assets/frontend-assets/assets'
import AlbumItem from '../pages/albumItem/AlbumItem'
import SongItem from '../pages/songItem/SongItem'

const DisplayHome = () => {
  return (
    <>
     <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[100%] lg:ml-0'>
     <div>
        <Navbar/>

        
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured charts</h1>
            <div className='flex overflow-auto'>
            {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
            </div>
        </div>
       
    </div>
    </div>
    </>
  )
}

export default DisplayHome
