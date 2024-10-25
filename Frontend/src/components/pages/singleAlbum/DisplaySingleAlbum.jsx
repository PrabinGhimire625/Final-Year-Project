import React from 'react'
import SingleAlbum from './SingleAlbum'
import Sidebar from '../sidebar/Sidebar'

const DisplaySingleAlbum = () => {
  return (
   <>
   <div className='h-screen bg-black'>

   <div className='h-[90%] flex'>
      <Sidebar/>
      <SingleAlbum/>
  
   </div>
   
 </div>
   </>
  )
}

export default DisplaySingleAlbum
