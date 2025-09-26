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
function App() {
  const [count, setCount] = useState(0)

    

  return (
    <>
      < Navbar />
      

    {/* */}
    <section id="header"  className="pt-30" style={{ minHeight:'90vh' }}>
      <Home />
    </section>


<section
  id="about"
  className=""
  style={{
    
    background: "linear-gradient(to bottom right, #f9f5f0, #f2e0c9, #e0c097)",
  }}
>
  <h1 className='text-3xl font-extrabold text-center text-gray-400 underline'>ABOUT</h1>
  <About />
</section>



<section
  id="project"
  className=" relative p-5"
  style={{
     
    background: 'linear-gradient(to bottom right, #f0f8ff, #e0f7fa, #ffffff)',
    backgroundSize: '300% 300%',
    animation: 'gradientShift 10s ease infinite',
    overflow: 'hidden',
  }}
>
  
  <Project />
</section>






    <section
  id="contact"
  className=" animated-gradient header"
>
  
  <Contact />
</section>

    <br />
    <br />

    <Footer/>


    
    < Toggle/>
    </>
  )
}

export default App
