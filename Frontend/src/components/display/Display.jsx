import React from 'react'
import Sidebar from '../pages/sidebar/Sidebar'
import Player from '../pages/player/Player'
import Navbar from '../../globals/components/navbar/Navbar'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <>
 
    <div className='h-screen bg-black'>

      <div className='h-[90%] flex'>
         <Sidebar/>
      <DisplayHome/>
      </div>
      <Player/>
      {/* <audio ref={audioRef} src={track.file} preload='auto'></audio> */}
    </div>
    </>
  )
}

export default Display
