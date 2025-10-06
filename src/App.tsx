import { useState,useEffect } from 'react'

import SakuraFalling from './components/Particles'


import './App.css'

import Navbar from './components/navbar'

import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'


import Toggle from './components/toggle'
import Sprinkle from './components/Sprinkle'
function App() {
  const [isDark, setIsDark] = useState(false)

  const handleThemeChange = (active:boolean) => {
    setIsDark(active)
  }
    

  return (
    <>
      < Navbar isDark={isDark}/>
      

    {/* */}
    <section id="header"  className="pt-30  h-screen" style={{
        background: isDark
          ? "linear-gradient(to bottom right, #111, #333, #000)"
          : "linear-gradient(-45deg, #fff0f5, #ffe4e1, #ffffff, #f8e1e7)",
        backgroundSize: isDark ? "100% 100%" : "300% 300%",
        animation: isDark ? "none" : "gradientMove 8s ease infinite",
        color: isDark ? "#f5f5f5" : "#5a3e60",
      }}>
      <Home />
    </section>


<section
  id="about"
  className="min-h-[calc(100vh-4rem)]"
  style={{
    
    background: isDark
    ? "linear-gradient(to bottom right, #111, #333, #000)"
    :"linear-gradient(to bottom right, #f9f5f0, #f2e0c9, #e0c097)",
  }}
>
  <h1 className='text-3xl font-extrabold text-center text-gray-400 underline'>ABOUT</h1>
  <About />
</section>



<section
  id="project"
  className=" relative p-5"
  style={{
     
    background: isDark 
    ? "linear-gradient(to bottom right, #111, #333, #000)"
    :'linear-gradient(to bottom right, #f0f8ff, #e0f7fa, #ffffff)',
    backgroundSize: '300% 300%',
    animation: 'gradientShift 10s ease infinite',
    overflow: 'hidden',
  }}
>
  
  <Project />
</section>






<section
  id="contact"
  className="relative overflow-hidden"
  
>
 


    <Contact isDark={isDark}/>
 
</section>



    <br />
    <br />

    <Footer isDark={isDark}/>


    
    < Toggle onThemeChange={handleThemeChange}/>
    </>
  )
}

export default App
