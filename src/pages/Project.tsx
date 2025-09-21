import React from 'react'
import Slider from '../components/Slider'
import AllProject from '../components/AllProject'
import SnowBackground from '../components/SnowBackground'

export default function Project() {
  return (
    <div  style={{ position: 'relative', overflow: 'hidden' /* hide overflow if needed */ }}>
      <SnowBackground count={80}/>
      <h1 className='text-3xl font-extrabold text-center text-gray-400 underline'>PROJECT</h1>

      <Slider />

      <br />
      < AllProject/>
    </div>
  )
}
