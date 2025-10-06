import React from 'react'
import Slider from '../components/Slider'
import AllProject from '../components/AllProject'
import SnowBackground from '../components/SnowBackground'

export default function Project() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* ❄ Snow background with lower z-index */}
      <div className="absolute inset-0 z-10">
        <SnowBackground count={100} />
      </div>
      

      {/* Main content with higher z-index */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 className='text-3xl font-extrabold text-center text-gray-400 underline'>PROJECT</h1>
        <Slider />
        <br />
        <AllProject />
        <a href="https://github.com/renesalvacion?tab=repositories" target='blank' className='underline text-right '><h1 className='text-right p-3 font-bold'>See All Project</h1></a>
      </div>
    </div>
  )
}
