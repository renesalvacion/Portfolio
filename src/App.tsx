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


    {/* */}
    <section id="header" className="pt-16" style={{ height: '110vh' }}>
      <Home />
    </section>


    {/* */}
    <section id='about' className="pt-16 bg-amber-50" style={{height:'100vh'}}>
        <About/>
    </section>


    {/* */}
    <section id='project'  className="pt-16" style={{height:'120vh', margin:'1rem'}}>
        < Project/> 
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
