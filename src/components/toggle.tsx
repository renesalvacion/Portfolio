import React, { Component, useState, forwardRef, useRef, useImperativeHandle} from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type ToggleProps = {
  onThemeChange: (active: boolean) => void
}
export default function toggle({onThemeChange} : ToggleProps) {

  const [bg, setCountBg] = useState("")
  const [bgActive, setBgActive] = useState(false)



  const divRef = useRef(null)

  const toggleBG = () => {
    const newState = !bgActive
    onThemeChange(newState)
    if(!bgActive){
      

    

    setBgActive(true)
    
    }else{
      
      setBgActive(false)
       
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


