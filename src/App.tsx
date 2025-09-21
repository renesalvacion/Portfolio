import { useState,useEffect } from 'react'


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
      <h1>Bago</h1>


    {/* */}
    <section id="header" className="pt-16" style={{ height: '110vh' }}>
      <Home />
    </section>


<section
  id="about"
  className="pt-16"
  style={{
    height: "130vh",
    background: "linear-gradient(to bottom right, #f9f5f0, #f2e0c9, #e0c097)",
  }}
>
  <About />
</section>



<section
  id="project"
  className="pt-16 relative"
  style={{
    height: '140vh',
    background: 'linear-gradient(to bottom right, #f0f8ff, #e0f7fa, #ffffff)',
    backgroundSize: '300% 300%',
    animation: 'gradientShift 10s ease infinite',
    overflow: 'hidden',
  }}
>
  <Project />
</section>




<br />
<br />
<br />
<br />

    {/* */}
    <section id='contact'  className="pt-16 bg-stone-50" >
        < Contact/>
    </section>
    <br />
    <br />

    <Footer/>


    
    < Toggle/>
    </>
  )
}

export default App
