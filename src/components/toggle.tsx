import React, { Component, useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function toggle() {

  const [bg, setCountBg] = useState("")
  const [bgActive, setBgActive] = useState(false)

  const toggleBG = () => {
    if(!bgActive){
       document.body.style.backgroundColor = ("black")
    document.body.style.color = ("white")
    document.body.style.transition = (".3s ease-in")

    

    setBgActive(true)
    }else{
      document.body.style.backgroundColor = ("white")
      setBgActive(false)
       document.body.style.color = ("")
       document.body.style.transition = (".3s ease-in")
    }
    
  }

  

  return (
    <>
    <button style={{position:'fixed', zIndex:'12', bottom:'1rem', right:'1rem', cursor:'pointer'}}
    onClick={toggleBG}
    >
      {!bgActive? <DarkModeIcon style={{fontSize:'2rem'}}/> : <LightModeIcon style={{fontSize:'2rem'}}/>}
      
    </button>
      
    </>
  )
}


