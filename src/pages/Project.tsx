import React from 'react'
import Slider from '../components/Slider'
import AllProject from '../components/AllProject'

export default function Project() {
  return (
    <div>
      <h1 className='text-3xl font-extrabold text-center text-gray-400 underline'>PROJECT</h1>

      <Slider/>

      <br />
      < AllProject/>
    </div>
  )
}
