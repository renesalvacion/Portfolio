import React, { Component, useState, forwardRef, useRef } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function toggle() {

  const [bg, setCountBg] = useState("")
  const [bgActive, setBgActive] = useState(false)

  const divRef = useRef(null)

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


  //check color fg bg
 const getBg = React.forwardRef((props, ref) => {

  const divRef = useRef<HTMLButtonElement>(null)

  React.useImperativeHandle(ref,() => ({
    logColor: () => {
      if(divRef.current){
        const bg = window.getComputedStyle(divRef.current)
        console.log(bg);
        
      }
    }
  }))
 })

  

  return (
    <>
    <button style={{position:'fixed', zIndex:'12', bottom:'1rem', right:'1rem', cursor:'pointer'}}
    onClick={toggleBG}
    >
      {!bgActive? <DarkModeIcon style={{fontSize:'2rem'}}/> : <LightModeIcon style={{fontSize:'2rem'}}/>}
      
    </button>

    <button ref={divRef} {...props}>CLick</button>
      
    </>
  )
}


